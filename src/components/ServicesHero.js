import * as React from 'react'
import { ForwardIcon, IdentificationIcon, FaceSmileIcon, HomeIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Years of experience',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: HomeIcon,
  },
  {
    name: 'Trusted in the community',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: IdentificationIcon,
  },
  {
    name: 'Fast & Reliable',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ForwardIcon,
  },
  {
    name: 'Satisfaction Guarenteed',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FaceSmileIcon,
  },
]

const ServicesHero = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expert Handyman Services: Reliable Solutions for Every Home Project
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We understand that your home is your sanctuary. That's why our team of skilled professionals is dedicated to delivering top-quality workmanship on every project, no matter how big or small.
                From routine maintenance to complete home renovations, we offer a wide range of services to keep your home in perfect condition.
                With a focus on reliability and customer satisfaction, you can trust us to handle your home with care and precision.
                Let us take the stress out of home improvement – we're here to help every step of the way.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )
}

export default ServicesHero