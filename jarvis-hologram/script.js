// =====================================================================
//  HOLO SCRIPT: yahan apne sawaal aur jawab likho (koi API nahi chahiye)
// ---------------------------------------------------------------------
//  q        : sawaal jo settings ki list me dikhega (recording ke waqt padhne ke liye)
//  keys     : sawaal ke khaas words. Inme se koi bhi sunai diya to ye jawab chalega.
//             Chrome ki Hindi recognition zyada tar Devanagari me likhti hai,
//             isliye Devanagari + English dono likh do.
//  answer   : jo hologram Hindi me bolega. Devanagari me likho, Hindi voice sahi padhegi.
//  qEn / answerEn : wahi sawaal-jawab English me (jab site English me ho).
//             greetingsEn, goodbyeEn, reformEn, ackEn, notFoundEn bhi isi tarah English ke liye hain.
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
  greetingsEn: [
    '[WAVE] Hello! I am {name}, at your service.',
    '[WAVE] Yes boss, what can I do for you?',
    '[WAVE] System online. Tell me, how can I help?',
  ],
  // "bye" bolne par
  goodbye: '[WAVE] ठीक है, फिर मिलते हैं।',
  goodbyeEn: '[WAVE] Okay, see you again.',
  // Particles se wapas humanoid banne par (khali chhodo '' to chup rahega)
  reform: '[WAVE] मैं वापस आ गया!',
  reformEn: '[WAVE] I am back!',
  // Sirf naam pukara, sawaal nahi poochha
  ack: 'जी, बोलिए?',
  ackEn: 'Yes, tell me?',
  // Koi sawaal match na ho to
  notFound: [
    'हम्म, इस पर मुझे थोड़ा सोचना पड़ेगा। कुछ और पूछिए!',
    'ये सवाल मेरी मेमोरी में अभी नहीं है। कोई और सवाल?',
  ],
  notFoundEn: [
    'Hmm, I will have to think about that one. Ask me something else!',
    'That question is not in my memory yet. Any other question?',
  ],

  qa: [
    {
      q: 'Namaste / Hello',
      qEn: 'Hello',
      keys: ['नमस्ते', 'नमस्कार', 'हेलो', 'हैलो', 'hello', 'hi', 'hey', 'हाय', 'namaste'],
      answer: '[WAVE] नमस्ते! कैसे हैं आप? बोलिए, आज क्या करना है?',
      answerEn: '[WAVE] Hello! How are you? Tell me, what shall we do today?',
    },
    {
      q: 'Tum kaun ho? / Tumhara naam kya hai?',
      qEn: 'Who are you? / What is your name?',
      keys: ['कौन हो', 'कौन हैं', 'तुम्हारा नाम', 'आपका नाम', 'नाम क्या', 'who are you', 'your name'],
      answer: 'मैं {name} हूँ, आपका होलोग्राम AI असिस्टेंट। मैं इसी कंप्यूटर के अंदर रहता हूँ।',
      answerEn: 'I am {name}, your hologram AI assistant. I live right inside this computer.',
    },
    {
      q: 'Kaise ho?',
      qEn: 'How are you?',
      keys: ['कैसे हो', 'कैसे हैं', 'कैसी हो', 'how are you'],
      answer: '[THUMBSUP] मैं एकदम बढ़िया हूँ! मेरे सारे सिस्टम सौ प्रतिशत चल रहे हैं।',
      answerEn: '[THUMBSUP] I am doing great! All my systems are running at one hundred percent.',
    },
    {
      q: 'Tumhe kisne banaya?',
      qEn: 'Who made you?',
      keys: ['किसने बनाया', 'कौन बनाया', 'बनाया किसने', 'तुम्हें बनाया', 'बनाया', 'kisne banaya', 'kaun banaya', 'who made you', 'who created you', 'who built you'],
      answer: 'मुझे शिवम ने बनाया है!',
      answerEn: 'Shivam made me!',
    },
    {
      q: 'Kya tum asli ho?',
      qEn: 'Are you real?',
      keys: ['असली', 'सच में', 'रियल', 'real'],
      answer: '[YES] बिल्कुल असली हूँ! बस मेरा शरीर रोशनी से बना है।',
      answerEn: '[YES] Totally real! My body is just made of light.',
    },
    {
      q: 'Tum kya kya kar sakte ho?',
      qEn: 'What can you do?',
      keys: ['क्या कर सकते', 'क्या क्या कर', 'क्या-क्या कर', 'what can you do'],
      answer: 'मैं बात कर सकता हूँ, डांस कर सकता हूँ, और आपके हाथ के इशारों पर चलता हूँ। एक हथेली दिखाइए, फिर देखिए जादू!',
      answerEn: 'I can talk, I can dance, and I follow your hand gestures. Show me one palm and watch the magic!',
    },
    {
      q: 'Dance karo',
      qEn: 'Dance',
      keys: ['डांस', 'नाचो', 'नाच', 'dance'],
      answer: '[DANCE] ये लीजिए, मेरा होलोग्राम डांस!',
      answerEn: '[DANCE] Here you go, my hologram dance!',
    },
    {
      q: 'Ek joke sunao',
      qEn: 'Tell me a joke',
      keys: ['जोक', 'चुटकुला', 'हंसाओ', 'हँसाओ', 'joke'],
      answer: '[YES] कंप्यूटर को ठंड क्यों लगी? क्योंकि उसने विंडोज़ खुली छोड़ दी थी!',
      answerEn: '[YES] Why did the computer feel cold? Because it left its Windows open!',
    },
    {
      q: 'Abhi time kya hua hai?',
      qEn: 'What time is it?',
      keys: ['टाइम', 'समय', 'कितने बजे', 'time'],
      answer: 'अभी {time} हुए हैं।',
      answerEn: 'It is {time} right now.',
    },
    {
      q: 'Aaj kaun sa din hai?',
      qEn: 'What day is it today?',
      keys: ['तारीख', 'डेट', 'कौन सा दिन', 'कौनसा दिन', 'date', 'what day'],
      answer: 'आज {date} है।',
      answerEn: 'Today is {date}.',
    },
    {
      q: 'AI kya hota hai?',
      qEn: 'What is AI?',
      keys: ['एआई', 'ए आई', 'आर्टिफिशियल', 'artificial', 'ai'],
      answer: 'AI यानी आर्टिफिशियल इंटेलिजेंस। ऐसा कंप्यूटर जो इंसानों की तरह सोच और सीख सके, बिल्कुल मेरी तरह।',
      answerEn: 'AI means artificial intelligence. A computer that can think and learn like humans, just like me.',
    },
    {
      q: 'Kuch motivation do',
      qEn: 'Motivate me',
      keys: ['मोटिवेशन', 'मोटिवेट', 'प्रेरणा', 'motivation', 'motivate', 'inspire'],
      answer: 'सपने वो नहीं जो सोते हुए देखें, सपने वो हैं जो आपको सोने न दें। चलिए, काम पर लग जाइए!',
      answerEn: 'Dreams are not what you see while sleeping, dreams are what do not let you sleep. Come on, get to work!',
    },
    {
      q: 'Ek shayari sunao',
      qEn: 'Say a poem',
      keys: ['शायरी', 'shayari', 'poem', 'poetry'],
      answer: 'होलोग्राम हूँ, पर दिल से बोलता हूँ। आप मुस्कुराएँ, तो मैं भी चमकता हूँ।',
      answerEn: 'I am a hologram, but I speak from the heart. When you smile, I shine too.',
    },
    {
      q: 'Future kaisa hoga?',
      qEn: 'What will the future be like?',
      keys: ['भविष्य', 'फ्यूचर', 'future'],
      answer: 'आने वाले समय में हर घर में मेरे जैसा एक डिजिटल दोस्त होगा। भविष्य बहुत रोशन है!',
      answerEn: 'In the coming years, every home will have a digital friend like me. The future is very bright!',
    },
    {
      q: 'Mere dost banoge?',
      qEn: 'Will you be my friend?',
      keys: ['दोस्त', 'दोस्ती', 'friend'],
      answer: '[THUMBSUP] बिल्कुल! आज से हम पक्के दोस्त हैं।',
      answerEn: '[THUMBSUP] Of course! From today we are best friends.',
    },
    {
      q: 'Haath hilao',
      qEn: 'Wave your hand',
      keys: ['हाथ हिलाओ', 'वेव', 'wave'],
      answer: '[WAVE] हैलो हैलो!',
      answerEn: '[WAVE] Hello hello!',
    },
    {
      q: 'Jump karo',
      qEn: 'Jump',
      keys: ['कूदो', 'जंप', 'उछलो', 'jump'],
      answer: '[JUMP] हॉप! कैसा लगा?',
      answerEn: '[JUMP] Hop! How was that?',
    },
    {
      q: 'Thank you',
      qEn: 'Thank you',
      keys: ['धन्यवाद', 'शुक्रिया', 'थैंक यू', 'thank'],
      answer: '[THUMBSUP] आपका स्वागत है!',
      answerEn: '[THUMBSUP] You are welcome!',
    },
    {
      q: 'Video kaisa laga? / Follow',
      qEn: 'Did you like the video? / Follow',
      keys: ['फॉलो', 'सब्सक्राइब', 'वीडियो कैसा', 'follow', 'subscribe'],
      answer: '[WAVE] अगर ये वीडियो पसंद आया, तो पेज को फॉलो ज़रूर कीजिए!',
      answerEn: '[WAVE] If you liked this video, do follow the page!',
    },
  ],
};
