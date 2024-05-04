import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    // <ul className="divide-y divide-stone-200 px-2">
    //   {menu.map((pizza) => (
    //     <MenuItem pizza={pizza} key={pizza.id} />
    //   ))}
    // </ul>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
    {menu.map((pizza) => (
      <div key={pizza.id}>
        <MenuItem pizza={pizza} />
      </div>
    ))}
  </div>
  

  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
