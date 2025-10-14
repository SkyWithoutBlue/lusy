import Image from 'next/image'

export default function Hero () {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-black rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-black rotate-12 animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-black rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-black rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center h-full py-10">
          <div className="lg:col-span-7 lg:order-2 order-2">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight transform translate-y-0 opacity-100 transition-all duration-1000">
                  Сильное тело. Уверенный дух.
                  <span className="block" style={{color: '#9A8A88'}}>
                    Твоя лучшая версия — вместе со мной.
                  </span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed transform translate-y-0 opacity-100 transition-all duration-1000 delay-300">
                  Тренировки Людмилы Чипизубовой — это больше, чем фитнес. Это путь к силе, гармонии и уверенности в каждом движении. Персональный подход, реальный результат и энергия, которая меняет жизнь.
                </p>
              </div>
              <div className="flex flex-col mt-4! sm:flex-row gap-4 transform translate-y-0 opacity-100 transition-all duration-1000 delay-500">
                <button className="group relative px-8! py-3! bg-black text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <span className="relative z-10">Узнать больше</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                <button className="px-8! py-3! bg-transparent border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                  Связаться со мной
                </button>
              </div>


            </div>
          </div>
          <div className="lg:col-span-5 lg:order-1 order-1">
            <div className="relative">
              <div className="relative group">

                <div className="relative bg-white rounded-3xl p-6 shadow-xl transform group-hover:scale-105 transition-transform duration-500">
                  <div className="relative overflow-hidden rounded-2xl ">
                    <Image
                      src="/lusy2.png"
                      alt="Lusy"
                      width={600}
                      height={700}
                      className="object-cover w-full h-full"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
                  </div>
                </div>

              </div>
              <div className="absolute top-0 right-0 w-24 h-24 border-2 border-gray-300 rounded-full -translate-y-16 translate-x-12 animate-spin" style={{animationDuration: '30s'}}></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-2 border-gray-400 rounded-full translate-y-12 -translate-x-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-600">
          <span className="text-sm mb-3 font-medium">Начни свой путь к лучшей версии себя</span>
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center relative">
            <div className="w-1 h-4 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
          </div>
          <div className="mt-2 text-xs">Прокрути вниз</div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gray-300"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-gray-300"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gray-300"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gray-300"></div>
    </section>
  )
}
