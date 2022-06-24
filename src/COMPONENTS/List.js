import Icon from './Icon';

const IconList = ({ investors }) => {
  return (
    <div>
      {
        investors.map((user, i) => {
          return (
            <Icon
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default IconList;