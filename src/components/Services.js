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
      "price": "Starting at $300",
      "description": "Includes wall mount, cord hiding, drywall opening and patching, texturing, and painting. Additional charges apply for more fire blocks."
    },
    {
      "service": "Angle Stops Install",
      "price": "$150 plus part",
      "description": "Installation of angle stops. Part cost is additional."
    },
    {
      "service": "Drywall Repair",
      "price": "Starting at $270",
      "description": "Repair requiring 2 to 3 visits based on mud drying time, texture, and paint."
    },
    {
      "service": "Prehung Door Hanging",
      "price": "$500 to $600",
      "description": "Installation of prehung doors. Price varies depending on door size."
    },
    {
      "service": "Door Service",
      "price": "$150",
      "description": "Resealing, adding weather seal, or sliding door cleaning and silicone greasing."
    },
    {
      "service": "BBQ Cleaning or Service",
      "price": "$135 per hour",
      "description": "Based on an hour of labor."
    },
    {
      "service": "Monthly Service Check of Property",
      "price": "$135",
      "description": "Includes cleaning weeds and resetting rental property."
    },
    {
      "service": "Sink Faucet Removal and Install",
      "price": "$140",
      "description": "Removal and installation of a sink faucet."
    },
    {
      "service": "Toilet Install (Standard)",
      "price": "$155",
      "description": "Standard installation of a toilet."
    },
    {
      "service": "Toilet Snaking or Sink Snaking",
      "price": "$150",
      "description": "Unclogging of toilets or sinks using a snake."
    },
    {
      "service": "Dryer Vent Service",
      "price": "$135 plus materials",
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
      "price": "$150 per hour",
      "description": "Based on an hour of labor."
    },
    {
      "service": "Outlet/Switch/Dimmer Install",
      "price": "$80 each",
      "description": "Installation of outlets, switches, or dimmers. Minimum of 2 units."
    },
    {
      "service": "Pressure Regulator Replacement",
      "price": "Starting at $300",
      "description": "Labor only for replacing a pressure regulator."
    },
    {
      "service": "LED Retrofit Lighting Install",
      "price": "$25 each",
      "description": "Installation of LED retrofit lighting. Minimum of 5 units."
    },
    {
      "service": "Hard Wired LED Retrofit Lighting Install",
      "price": "$120 each",
      "description": "Installation of hard wired LED retrofit lighting. Minimum of 2 units."
    },
    {
      "service": "Pendant Lighting Install or Chandelier (8ft ceiling or less)",
      "price": "$140",
      "description": "Installation of pendant lighting or chandeliers for ceilings 8 feet or lower."
    },
    {
      "service": "Pendant Lighting Install or Chandelier (above 8ft ceiling)",
      "price": "$150 to $300",
      "description": "Installation of pendant lighting or chandeliers for ceilings above 8 feet. Ladder or scaffolding rental may be required."
    },
    {
      "service": "Bathroom Exhaust Fan Install",
      "price": "$155",
      "description": "Basic installation of a bathroom exhaust fan based on 1 hour of labor."
    },
    {
      "service": "Exterior Lighting Install",
      "price": "$140",
      "description": "Installation of exterior lighting."
    },
    {
      "service": "GFCI Install",
      "price": "$90 plus part",
      "description": "Installation of GFCI outlets. Minimum of 2 units. Part cost is additional."
    },
    {
      "service": "Mixer Valve Install",
      "price": "Starting at $500 plus parts",
      "description": "Installation of a mixer valve. Part cost is additional."
    },
    {
      "service": "Overhead Garage Storage Racks Install",
      "price": "$500 to $600",
      "description": "Installation of overhead garage storage racks. Price varies depending on rack size. Rack not included."
    },
    {
      "service": "Plug Add-On",
      "price": "Starting at $300 plus parts",
      "description": "Creation of a new plug. Part cost is additional."
    },
    {
      "service": "Door Casing and Frame Replacement",
      "price": "Starting at $270",
      "description": "Replacement of door casing and frame. Parts not included."
    },
    {
      "service": "Keypad Lock Service/Install",
      "price": "$155",
      "description": "Service or installation of a keypad lock."
    },
    {
      "service": "Painting (requires on-site viewing)",
      "price": "Starting at $270",
      "description": "Painting services, price determined after on-site viewing."
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