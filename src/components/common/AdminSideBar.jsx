import React from 'react';
import { useTranslation } from 'react-i18next';
import assets from '../../utils/assets';
import { useRoutes } from '../useRoutes';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AdminSideBar() {
  const { t } = useTranslation();
  const { isMenuOpen } = useSelector((state) => state.navbar);
  const routes = useRoutes();

  return (
    <div
      className={`bg-white flex flex-col items-center justify-between transition-all duration-200 
        ${isMenuOpen ? 'w-80 md:w-80 h-full' : 'w-0'}`}
    >
      <div className='w-full'>
        <div className='h-15 flex items-center w-full px-4 gap-2'>
          <img src={assets.logo} alt='logo' className='w-8' />
          <h1 className='text-2xl font-bold text-main'>{t('common.name')}</h1>
        </div>

        <div className='mt-5 h-[calc(100vh-150px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100'>
          <ul className='list-none px-4 flex flex-col space-y-3'>
            {routes.map((route) => (
              <li key={route.id}>
                <NavLink
                  to={route.path || '#'}
                  end
                  className={({ isActive }) =>
                    `flex items-center text-gray-600 gap-x-2 p-3 hover:bg-main hover:text-white transition-all duration-100 rounded-lg ${
                      isActive ? 'bg-main text-white' : ''
                    }`
                  }
                >
                  {route.icon} {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='w-[96%] mb-2 flex items-center px-4'>
        <h3>Log out</h3>
      </div>
    </div>
  );
}

export default AdminSideBar;
