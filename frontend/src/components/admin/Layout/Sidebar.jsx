import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  List, 
  ShoppingCart, 
  Users, 
  BarChart2, 
  CreditCard, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Artikli', icon: Package, path: '/admin/products' },
    { name: 'Kategorije', icon: List, path: '/admin/categories' },
    { name: 'Narudžbe', icon: ShoppingCart, path: '/admin/orders' },
    { name: 'Korisnici', icon: Users, path: '/admin/users' },
    { name: 'Statistika', icon: BarChart2, path: '/admin/statistics' },
    { name: 'Transakcije', icon: CreditCard, path: '/admin/transactions' },
    { name: 'Početna', icon: LogOut, path: '/' },
  ];

  return (
    <div className="w-64 bg-[#0B1120] text-white h-screen fixed left-0 top-0 p-4">
      <div className="text-xl font-bold mb-8 p-2">Bob d.o.o </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;