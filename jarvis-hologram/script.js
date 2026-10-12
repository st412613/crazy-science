// =====================================================================
//  HOLO SCRIPT: yahan apne sawaal aur jawab likho (koi API nahi chahiye)
// ---------------------------------------------------------------------
//  q       : sawaal jo settings ki list me dikhega (recording ke waqt padhne ke liye)
//  keys    : sawaal ke khaas words. Inme se koi bhi sunai diya to ye jawab chalega.
//            Chrome ki Hindi recognition zyada tar Devanagari me likhti hai,
//            isliye Devanagari + English dono likh do.
//  answer  : jo hologram bolega. Devanagari me likho, Hindi voice sahi padhegi.
//
//  Answer ke shuru me ek gesture tag laga sakte ho:
//    [WAVE] haath hilana   [DANCE] naachna   [YES] haan me sir
//    [NO] na me sir        [JUMP] uchhalna   [THUMBSUP] thumbs up
//
//  Placeholders:  {name} = assistant ka naam   {time} = abhi ka time   {date} = aaj ki date
//
//  Tip: Settings me "Line by line" chuno to har sawaal par list ka agla jawab
//  order me bolega, chahe sawaal kuch bhi ho (perfect reel take ke liye).
//  Recording me N dabao to agla jawab turant bolega.
// =====================================================================
window.HOLO_SCRIPT = {
  // Bulane par (taali / naam) inme se koi ek bolega
  greetings: [
    '[WAVE] नमस्ते! मैं {name}, आपकी सेवा में हाज़िर हूँ।',
    '[WAVE] जी बॉस, बोलिए क्या हुक्म है?',
    '[WAVE] सिस्टम ऑनलाइन है। बताइए, क्या मदद करूँ?',
  ],
  // "bye" bolne par
  goodbye: '[WAVE] ठीक है, फिर मिलते हैं।',
  // Particles se wapas humanoid banne par (khali chhodo '' to chup rahega)
  reform: '[WAVE] मैं वापस आ गया!',
  // Sirf naam pukara, sawaal nahi poochha
  ack: 'जी, बोलिए?',
  // Koi sawaal match na ho to
  notFound: [
    'हम्म, इस पर मुझे थोड़ा सोचना पड़ेगा। कुछ और पूछिए!',
    'ये सवाल मेरी मेमोरी में अभी नहीं है। कोई और सवाल?',
  ],

  qa: [
    {
      q: 'Namaste / Hello',
      keys: ['नमस्ते', 'नमस्कार', 'हेलो', 'हैलो', 'hello', 'hi', 'हाय'],
      answer: '[WAVE] नमस्ते! कैसे हैं आप? बोलिए, आज क्या करना है?',
    },
    {
      q: 'Tum kaun ho? / Tumhara naam kya hai?',
      keys: ['कौन हो', 'कौन हैं', 'तुम्हारा नाम', 'आपका नाम', 'नाम क्या', 'who are you', 'your name'],
      answer: 'मैं {name} हूँ, आपका होलोग्राम AI असिस्टेंट। मैं इसी कंप्यूटर के अंदर रहता हूँ।',
    },
    {
      q: 'Kaise ho?',
      keys: ['कैसे हो', 'कैसे हैं', 'कैसी हो', 'how are you'],
      answer: '[THUMBSUP] मैं एकदम बढ़िया हूँ! मेरे सारे सिस्टम सौ प्रतिशत चल रहे हैं।',
    },
    {
      q: 'Tumhe kisne banaya?',
      keys: ['किसने बनाया', 'कौन बनाया', 'बनाया किसने', 'तुम्हें बनाया', 'बनाया', 'kisne banaya', 'kaun banaya', 'who made you', 'who created you'],
      answer: 'मुझे शिवम ने बनाया है!',
    },
    {
      q: 'Kya tum asli ho?',
      keys: ['असली', 'सच में', 'रियल', 'real'],
      answer: '[YES] बिल्कुल असली हूँ! बस मेरा शरीर रोशनी से बना है।',
    },
    {
      q: 'Tum kya kya kar sakte ho?',
      keys: ['क्या कर सकते', 'क्या क्या कर', 'क्या-क्या कर', 'what can you do'],
      answer: 'मैं बात कर सकता हूँ, डांस कर सकता हूँ, और आपके हाथ के इशारों पर चलता हूँ। एक हथेली दिखाइए, फिर देखिए जादू!',
    },
    {
      q: 'Dance karo',
      keys: ['डांस', 'नाचो', 'नाच', 'dance'],
      answer: '[DANCE] ये लीजिए, मेरा होलोग्राम डांस!',
    },
    {
      q: 'Ek joke sunao',
      keys: ['जोक', 'चुटकुला', 'हंसाओ', 'हँसाओ', 'joke'],
      answer: '[YES] कंप्यूटर को ठंड क्यों लगी? क्योंकि उसने विंडोज़ खुली छोड़ दी थी!',
    },
    {
      q: 'Abhi time kya hua hai?',
      keys: ['टाइम', 'समय', 'कितने बजे', 'time'],
      answer: 'अभी {time} हुए हैं।',
    },
    {
      q: 'Aaj kaun sa din hai?',
      keys: ['तारीख', 'डेट', 'कौन सा दिन', 'कौनसा दिन', 'date'],
      answer: 'आज {date} है।',
    },
    {
      q: 'AI kya hota hai?',
      keys: ['एआई', 'ए आई', 'आर्टिफिशियल', 'artificial', 'ai'],
      answer: 'AI यानी आर्टिफिशियल इंटेलिजेंस। ऐसा कंप्यूटर जो इंसानों की तरह सोच और सीख सके, बिल्कुल मेरी तरह।',
    },
    {
      q: 'Kuch motivation do',
      keys: ['मोटिवेशन', 'मोटिवेट', 'प्रेरणा', 'motivation'],
      answer: 'सपने वो नहीं जो सोते हुए देखें, सपने वो हैं जो आपको सोने न दें। चलिए, काम पर लग जाइए!',
    },
    {
      q: 'Ek shayari sunao',
      keys: ['शायरी', 'shayari'],
      answer: 'होलोग्राम हूँ, पर दिल से बोलता हूँ। आप मुस्कुराएँ, तो मैं भी चमकता हूँ।',
    },
    {
      q: 'Future kaisa hoga?',
      keys: ['भविष्य', 'फ्यूचर', 'future'],
      answer: 'आने वाले समय में हर घर में मेरे जैसा एक डिजिटल दोस्त होगा। भविष्य बहुत रोशन है!',
    },
    {
      q: 'Mere dost banoge?',
      keys: ['दोस्त', 'दोस्ती', 'friend'],
      answer: '[THUMBSUP] बिल्कुल! आज से हम पक्के दोस्त हैं।',
    },
    {
      q: 'Haath hilao',
      keys: ['हाथ हिलाओ', 'वेव', 'wave'],
      answer: '[WAVE] हैलो हैलो!',
    },
    {
      q: 'Jump karo',
      keys: ['कूदो', 'जंप', 'उछलो', 'jump'],
      answer: '[JUMP] हॉप! कैसा लगा?',
    },
    {
      q: 'Thank you',
      keys: ['धन्यवाद', 'शुक्रिया', 'थैंक यू', 'thank'],
      answer: '[THUMBSUP] आपका स्वागत है!',
    },
    {
      q: 'Video kaisa laga? / Follow',
      keys: ['फॉलो', 'सब्सक्राइब', 'वीडियो कैसा', 'follow', 'subscribe'],
      answer: '[WAVE] अगर ये वीडियो पसंद आया, तो पेज को फॉलो ज़रूर कीजिए!',
    },
  ],
};
