import React from 'react';

interface Command {
  title: string;
  command: Function;
}

interface CommandsListProps {
  items: Command[];
  command: (item: Command) => void;
}

const CommandsList: React.FC<CommandsListProps> = ({ items, command }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      setSelectedIndex((selectedIndex + items.length - 1) % items.length);
    } else if (event.key === 'ArrowDown') {
      setSelectedIndex((selectedIndex + 1) % items.length);
    } else if (event.key === 'Enter') {
      command(items[selectedIndex]);
    }
  };

  return (
    <div className="dropdown-menu" onKeyDown={handleKeyDown}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <button
            key={index}
            className={`dropdown-item text-white flex flex-col ${index === selectedIndex ? 'is-selected' : ''}`}
            onClick={() => command(item)}
          >
            {item.title}
          </button>
        ))
      ) : (
        <div className="no-results">No results</div>
      )}
    </div>
  );
};

export default CommandsList;
