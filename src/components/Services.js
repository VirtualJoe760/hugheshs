import * as React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const allServices = [
    {
      "service": "Garbage Disposal Install",
      "price": "$140",
      "description": "Basic installation of a garbage disposal unit. Parts not included."
    },
    {
      "service": "Ceiling Fan Install",
      "price": "$155",
      "description": "Basic installation of a ceiling fan. Typically completed within 1 hour."
    },
    {
      "service": "TV Mounting",
      "price": "$155",
      "description": "Basic installation of a TV mount on the wall."
    },
    {
      "service": "TV Mounting with In-Wall Cord Hiding",
      "price": "$300+",
      "description": "Includes wall mount, cord hiding, drywall opening and patching, texturing, and painting. Additional charges apply depending on stucture and for more fire blocks."
    },
    {
      "service": "Angle Stops Install",
      "price": "$150",
      "description": "Installation of angle stops. Part cost is additional."
    },
    {
      "service": "Drywall Repair",
      "price": "$270+",
      "description": "Repair requiring 2 to 3 visits based on mud drying time, texture, and paint. $270 is our starting price, depending on the damage there could be additional costs. Please ask your service provider to give an estimate upon seeing the damage."
    },
    {
      "service": "Prehung Door Hanging",
      "price": "$500+",
      "description": "Installation of prehung doors. Price varies depending on door size."
    },
    {
      "service": "Door Service",
      "price": "$150",
      "description": "Resealing, adding weather seal, or sliding door cleaning and silicone greasing."
    },
    {
      "service": "BBQ Cleaning or Service",
      "price": "$135/h",
      "description": "Based on an hour of labor."
    },
    {
      "service": "Property Service",
      "price": "$135",
      "description": "A monthly property service check/inspection. Includes cleaning weeds, basic property maintance and resetting rental property. Price may vary according to list of tasks."
    },
    {
      "service": "Sink Maintance",
      "price": "$140",
      "description": "Removal and installation of a sink faucet."
    },
    {
      "service": "Toilet Install",
      "price": "$155",
      "description": "Standard installation of a toilet."
    },
    {
      "service": "Drain Snaking",
      "price": "$150",
      "description": "Unclogging of toilets or sinks using a snake."
    },
    {
      "service": "Dryer Vent Service",
      "price": "$135",
      "description": "Service includes cleaning and maintenance of dryer vents. Material costs are additional."
    },
    {
      "service": "Ring Doorbell Install",
      "price": "$140",
      "description": "Installation of a Ring doorbell."
    },
    {
      "service": "Solar Panel Cleaning",
      "price": "$150",
      "description": "Cleaning of solar panels."
    },
    {
      "service": "Power Washing Service",
      "price": "$150/h",
      "description": "Based on an hour of labor."
    },
    {
      "service": "Outlet/Switch/Dimmer Install",
      "price": "$80/unit",
      "description": "Installation of outlets, switches, or dimmers. Minimum of 2 units."
    },
    {
      "service": "Pressure Regulator Replacement",
      "price": "$300+",
      "description": "Labor only for replacing a pressure regulator."
    },
    {
      "service": "LED Retrofit Lighting",
      "price": "$25/unit",
      "description": "Installation of LED retrofit lighting. Minimum of 5 units."
    },
    {
      "service": "Hard Wired LED Retrofit Lighting",
      "price": "$120/unit",
      "description": "Installation of hard wired LED retrofit lighting. Minimum of 2 units."
    },
    {
      "service": "Pendant Lighting Install or Chandelier",
      "price": "$140",
      "description": "Installation of pendant lighting or chandeliers for ceilings 8 feet or lower."
    },
    {
      "service": "Pendant Lighting Install or High Ceiling Chandelier",
      "price": "$150+",
      "description": "Installation of pendant lighting or chandeliers for ceilings above 8 feet. Ladder or scaffolding rental may be required. Price can range from $150-$300."
    },
    {
      "service": "Bathroom Exhaust Fan Install",
      "price": "$155",
      "description": "Basic installation of a bathroom exhaust fan based on 1 hour of labor."
    },
    {
      "service": "Exterior Lighting",
      "price": "$140",
      "description": "Installation of exterior lighting."
    },
    {
      "service": "GFCI Install",
      "price": "$90/unit",
      "description": "Installation of GFCI outlets. Minimum of 2 units. Parts cost is additional."
    },
    {
      "service": "Mixer Valve",
      "price": "$500+",
      "description": "Installation of a mixer valve. Starting at $500, Parts cost is additional."
    },
    {
      "service": "Garage Storage Racks",
      "price": "$500+",
      "description": "Installation of overhead garage storage racks. Price range between $500-$600 varies depending on rack size. Rack not included."
    },
    {
      "service": "Plug Add-On",
      "price": "$300+",
      "description": "Creation of a new plug. Price starts at $300 but could vary depnding on the scope of the project. Part cost is additional."
    },
    {
      "service": "Door Casing",
      "price": "$270+",
      "description": "Replacement of door casing and frame. Parts not included."
    },
    {
      "service": "Keypad Lock Service/Install",
      "price": "$155",
      "description": "Service or installation of a keypad lock."
    },
    {
      "service": "Painting(Inspection Required)",
      "price": "$270",
      "description": "Painting services, full price determined after on-site viewing."
    }
  ]

const Services = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Services & Pricing</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {allServices.map((allServices) => (
              <Disclosure key={allServices.service} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="flex w-full justify-between text-gray-900">     
                    <span className="text-base font-semibold leading-7">{allServices.service}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <p className="me-5">{allServices.price}</p>
                      <PlusIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{allServices.description}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Services