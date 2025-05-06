import {BellIcon} from "@heroicons/react/24/outline/index.js";
import {useState} from "react";

function Campanita() {
    const [notifications] = useState([
        { id: 1, message: 'Nuevo reporte disponible', read: false },
        { id: 2, message: 'Actualización del sistema', read: true }
    ]);

    const [showNotifications, setShowNotifications] = useState(false);
    const unreadCount = notifications.filter(n => !n.read).length;
    return(
      <div>
          {/* Campana de notificaciones en esquina inferior derecha */}
          <div className="fixed bottom-6 right-6 z-20">
              <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-4 bg-green-600 rounded-full text-white shadow-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                  <BellIcon className="h-6 w-6" />
                  {unreadCount > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1
                      text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 animate-ping rounded-full
                      rounded-full">
                                {unreadCount}
                            </span>
                  )}
              </button>

              {/* Menú desplegable de notificaciones */}
              {showNotifications && (
                  <div className="absolute bottom-16 bg-gray-900 right-0 w-72 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                      <div className="px-4 py-2 border-b border-gray-200">
                          <p className="text-sm font-medium text-white">Notificaciones</p>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                          {notifications.length > 0 ? (
                              notifications.map((notification) => (
                                  <div
                                      key={notification.id}
                                      className={`px-4 py-3 hover:bg-gray-700`}
                                  >
                                      <p className="text-sm text-white">{notification.message}</p>
                                      <p className="text-xs text-[#05DF6F] mt-1">Hace 2 horas</p>
                                  </div>
                              ))
                          ) : (
                              <div className="px-4 py-3 text-center">
                                  <p className="text-sm text-gray-500">No hay notificaciones nuevas</p>
                              </div>
                          )}
                      </div>
                      <div className="px-4 py-2 border-t border-gray-200 text-center">
                          <button className="text-sm text-indigo-600 text-white">
                              Marcar todas como leídas
                          </button>
                      </div>
                  </div>
              )}
          </div>
      </div>
    );
}
export default Campanita;