'use client';

export default function Banner() {
  return (
    <section className="relative bg-green-100 overflow-hidden h-auto md:h-[550px]">
      {/* Background Image */}
      <img
        src="/images/Banner.jpg"
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-white">
        {/* Text Section */}
        <div className="col-span-1 lg:col-span-2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            🌿 शिफावेदा: शुद्ध आयुर्वेद, आपके स्वास्थ्य का साथी! 🌿
          </h1>
          <p className="mt-4 text-lg">
            🚧 हमारी वेबसाइट पर कार्य जोर-शोर से चल रहा है!<br />
            जल्द ही आपके लिए शुद्ध आयुर्वेदिक समाधान एक क्लिक पर उपलब्ध होंगे।<br />
            💚 प्राकृतिक उपचार, पारंपरिक ज्ञान, और आधुनिक सुविधा का संगम।<br />
            📞 तब तक हमसे जुड़ें: <a href="https://wa.me/8505854178" className="underline">WhatsApp - 8505854178</a><br />
            अपने स्वास्थ्य को आयुर्वेद की शक्ति से निखारें!
          </p>
          <p className="mt-4 text-base sm:text-lg">
            प्राकृतिक जड़ी-बूटियों से बने हमारे प्रोडक्ट्स आपकी सेहत का ख्याल रखते हैं।
          </p>
          <button className="mt-6 px-6 py-3 bg-shifavedaGreen text-white rounded-md hover:bg-green-700 transition">
            अभी खरीदें
          </button>
        </div>

        {/* Right (You can use image if needed) */}
        <div className="col-span-1 hidden lg:flex justify-center">
          {/* Future image if needed */}
        </div>
      </div>
    </section>
  );
}
