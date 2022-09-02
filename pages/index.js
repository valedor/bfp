import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [{ name: "Health Overview", href: "#", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#8667f0]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="public/logo.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-5 tracking-normal">
                        <span>Health Overview</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6"></div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 tracking-normal">
                  <span>Health Overview</span>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow"></header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* All the modifications about the main content goes here */}
            <div class="flex">
              <div class="flex-1 ">
                <h1 className="text-6xl mt-12">Caclculadora de Grasa Corporal</h1>
                <br></br>
                <p className="text-gray-400 text-lg">
                  El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla  de calcular un aproximado
                  del porcentaje del tejido adiposo en el cuerpo de una persona.
                </p>
                <br></br>

                <p className="text-gray-400 text-lg">
                  Los valores requeridos por la fórmula son los siguientes:
                </p>
                <br></br>

                <h1 className="text-xl">
                  Género
                </h1>
                <br></br>

                <input id="radio-hombre" type="radio" name="radio-genero"/>
                <label className="ml-2 " for="radio-hombre">Hombre</label>
                
                <input id="radio-mujer" className="ml-5" type="radio" name="radio-genero"/>
                <label className="ml-2" for="radio-mujer">Mujer</label>
                <br></br>

                <h1 className="text-xl mt-10">
                  Altura (cm)
                </h1>
                <input id="input-altura" type="number" className="rounded-full bg-black mt-3 w-full" placeholder="Escribe tu altura" />

                <h1 className="text-xl mt-10">
                  Peso (kg)
                </h1>
                <input id="input-peso" type="number" className="rounded-full bg-black mt-3 w-full" placeholder="Escribe tu peso" />

                <h1 className="text-xl mt-10">
                  Cintura (cm)
                </h1>
                <input id="input-cintura" type="number" className="rounded-full bg-black mt-3 w-full" placeholder="Medida de tu cintura" />

                <h1 className="text-xl mt-10">
                  Cuello (cm)
                </h1>
                <input id="input-cuello" type="number" className="rounded-full bg-black mt-3 w-full" placeholder="Medida de tu cuello" />

                <div className="mt-10">
                  <button type="button" className="rounded-full bg-[#8667f0] px-5 py-2.5 hover:bg-[#8651f0] text-center mr-2 mb-2">Calcular</button>
                  <button type="button" className="rounded-full ml-5 px-5 py-2.5 hover:ring-1 hover:ring-bg-[#8667f0] text-center mr-2 mb-2">Limpiar</button>
                </div>


                <span className="sr-only">Open main menu</span>
              </div>
              
              <div class="flex-1 ">
                
              </div>
            </div>
            {/* /End main content */}
          </div>
        </main>
      </div>
    </>
  );
}
