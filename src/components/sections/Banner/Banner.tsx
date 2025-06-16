// 'use client';

// export default function Banner() {
//   return (
//     <section className="relative bg-green-100 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left: Text Content */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
// 🌿 शिफावेदा: शुद्ध आयुर्वेद, आपके स्वास्थ्य का साथी! 🌿<br/>

// 🚧 हमारी वेबसाइट पर कार्य जोर-शोर से चल रहा है!<br/>

// जल्द ही आपके लिए शुद्ध आयुर्वेदिक समाधान एक क्लिक पर उपलब्ध होंगे। <br/>

// 💚 प्राकृतिक उपचार, पारंपरिक ज्ञान, और आधुनिक सुविधा का संगम। <br/>

// 📞 तब तक हमसे जुड़ें: WhatsApp - 8505854178 <br/>

// अपने स्वास्थ्य को आयुर्वेद की शक्ति से निखारें!<br/>
//           </h1>
//           <p className="mt-4 text-gray-600 text-lg">
//             प्राकृतिक जड़ी-बूटियों से बने हमारे प्रोडक्ट्स आपकी सेहत का ख्याल रखते हैं।  
//           </p>
//           <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
//             अभी खरीदें
//           </button>
//         </div>

//         {/* Right: Image */}
//         <div className="flex justify-center">
//           {/* <img
//             src="/images/banner-hero.png" // apni image ka path yahan daal
//             alt="Ayurvedic Banner"
//             className="w-full max-w-md md:max-w-lg"
//           /> */}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

export default function Banner() {
  return (
    <section className="relative bg-green-100 py-12 px-4 sm:px-8 md:py-16 md:px-12 lg:px-16 overflow-hidden">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left: Text Content */}
        <div className="col-span-1 lg:col-span-2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight break-words">
            🌿 शिफावेदा: शुद्ध आयुर्वेद, आपके स्वास्थ्य का साथी! 🌿
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            🚧 हमारी वेबसाइट पर कार्य जोर-शोर से चल रहा है!<br />
            जल्द ही आपके लिए शुद्ध आयुर्वेदिक समाधान एक क्लिक पर उपलब्ध होंगे।<br />
            💚 प्राकृतिक उपचार, पारंपरिक ज्ञान, और आधुनिक सुविधा का संगम।<br />
            📞 तब तक हमसे जुड़ें: <a href="https://wa.me/8505854178" className="underline">WhatsApp - 8505854178</a><br />
            अपने स्वास्थ्य को आयुर्वेद की शक्ति से निखारें!
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            प्राकृतिक जड़ी-बूटियों से बने हमारे प्रोडक्ट्स आपकी सेहत का ख्याल रखते हैं।
          </p>
          <button className="mt-6 px-6 py-3 bg-shifavedaGreen text-white rounded-md hover:bg-green-700 transition">
            अभी खरीदें
          </button>
        </div>

        {/* Right: Image */}
        <div className="col-span-1 flex justify-center">
          {/* <img
            src="/images/banner-hero.png" // अपनी इमेज public/images/ में डालो
            alt="Ayurvedic Banner"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          /> */}
        </div>
      </div>
    </section>
  );
}