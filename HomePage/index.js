document.addEventListener('DOMContentLoaded', () => {
  fetchCountries();
});
const additionalCountryInfo = {
  "Afghanistan": {
      funFact: "Afghanistan is known for its rugged mountainous terrain and rich cultural heritage.",
      historicalFact: "Afghanistan was a central point of the Silk Road and has been the site of various ancient civilizations."
  },
  "Albania": {
      funFact: "Albania is home to ancient Greek and Roman ruins, as well as stunning Mediterranean beaches.",
      historicalFact: "Albania was under Ottoman rule for nearly 500 years until it gained independence in 1912."
  },
  "Algeria": {
      funFact: "Algeria is the largest country in Africa and is famous for its Sahara Desert landscapes.",
      historicalFact: "Algeria was a French colony until it gained independence in 1962 after a long struggle."
  },
  "American Samoa": {
      funFact: "American Samoa is known for its natural beauty, including coral reefs and volcanic mountains.",
      historicalFact: "American Samoa has been inhabited for over 3,000 years and has strong Polynesian cultural influences."
  },
  "Andorra": {
      funFact: "Andorra is a landlocked microstate known for its ski resorts and tax haven status.",
      historicalFact: "Andorra has a unique co-principality arrangement with two princes, one of whom is the President of France."
  },
  "Angola": {
      funFact: "Angola is rich in natural resources including oil, diamonds, and minerals.",
      historicalFact: "Angola gained independence from Portugal in 1975 after a lengthy war for independence."
  },
  "Anguilla": {
      funFact: "Anguilla is known for its stunning beaches and vibrant coral reefs.",
      historicalFact: "Anguilla has been a British overseas territory since 1980, having previously been part of St. Kitts and Nevis."
  },
  "Antarctica": {
      funFact: "Antarctica is the coldest, windiest, and driest continent on Earth, and hosts the South Pole.",
      historicalFact: "Antarctica is primarily known for its scientific research stations and unique ecosystem."
  },
  "Antigua and Barbuda": {
      funFact: "Antigua and Barbuda is renowned for its beautiful beaches and sailing opportunities.",
      historicalFact: "Antigua was first settled by the Amerindians around 3100 BC, while Barbuda was colonized by the British in 1666."
  },
  "Argentina": {
      funFact: "Argentina is famous for its tango music and dance, as well as its beef and wine.",
      historicalFact: "Argentina gained independence from Spain in 1816, following a series of revolutionary wars."
  },
  "Armenia": {
      funFact: "Armenia is one of the oldest countries in the world, with a rich cultural heritage.",
      historicalFact: "Armenia was the first nation to adopt Christianity as its state religion in the early 4th century."
  },
  "Aruba": {
      funFact: "Aruba is known for its white-sand beaches, turquoise waters, and year-round sunny weather.",
      historicalFact: "Aruba was first colonized by the Spanish in 1499 and has been part of the Kingdom of the Netherlands since 1636."
  },
  "Australia": {
      funFact: "Australia is home to the world's largest coral reef system, the Great Barrier Reef.",
      historicalFact: "Australia was inhabited by indigenous Australians for about 65,000 years before European settlement began in the late 18th century."
  },
  "Austria": {
      funFact: "Austria is famous for its classical music composers, such as Mozart, Beethoven, and Strauss.",
      historicalFact: "Austria was a major European power and the center of the Habsburg dynasty from the 16th century until World War I."
  },
  "Azerbaijan": {
      funFact: "Azerbaijan is known as the Land of Fire due to its long history of fire-worshipping Zoroastrians.",
      historicalFact: "Azerbaijan gained independence from the Soviet Union in 1991 and has since developed into a modern, oil-rich nation."
  },
  "Bahamas": {
      funFact: "The Bahamas is famous for its crystal-clear waters, white sandy beaches, and vibrant marine life.",
      historicalFact: "The Bahamas gained independence from the United Kingdom in 1973, but remains a member of the Commonwealth."
  },
  "Bahrain": {
      funFact: "Bahrain is home to the ancient Dilmun civilization and has a rich history of pearl diving.",
      historicalFact: "Bahrain is one of the oldest centers of civilization in the Middle East and has been ruled by various empires throughout history."
  },
  "Bangladesh": {
      funFact: "Bangladesh is known as the land of rivers, with over 700 rivers crisscrossing the country.",
      historicalFact: "Bangladesh gained independence from Pakistan in 1971 after a war of independence."
  },
  "Barbados": {
      funFact: "Barbados is famous for its white sandy beaches and vibrant nightlife.",
      historicalFact: "Barbados was a British colony from the early 17th century until it gained independence in 1966."
  },
  "Belarus": {
      funFact: "Belarus is known for its dense forests, grand castles, and Soviet-era architecture.",
      historicalFact: "Belarus was part of the Soviet Union until it declared independence in 1991."
  },
  "Belgium": {
      funFact: "Belgium is famous for its chocolates, waffles, and beers.",
      historicalFact: "Belgium has been a battleground for European powers due to its strategic location."
  },
  "Belize": {
      funFact: "Belize is home to the largest barrier reef in the Northern Hemisphere, a UNESCO World Heritage site.",
      historicalFact: "Belize was formerly known as British Honduras and gained independence from the United Kingdom in 1981."
  },
  "Benin": {
      funFact: "Benin is known for its rich history and traditional religious practices.",
      historicalFact: "Benin was once the site of the powerful Kingdom of Dahomey, known for its military prowess and cultural achievements."
  },
  "Bermuda": {
      funFact: "Bermuda is famous for its pink sand beaches and mysterious Bermuda Triangle.",
      historicalFact: "Bermuda has been a British overseas territory since the early 17th century."
  },
  "Bhutan": {
      funFact: "Bhutan is known for its Gross National Happiness index and commitment to environmental conservation.",
      historicalFact: "Bhutan has maintained its independence throughout its history, avoiding colonization despite its location between China and India."
  },
  "Bolivia": {
      funFact: "Bolivia is home to the world's highest capital city, La Paz, and the largest salt flat, Salar de Uyuni.",
      historicalFact: "Bolivia was part of the Inca Empire and later became a Spanish colony until it gained independence in 1825."
  },
  "Bonaire, Sint Eustatius and Saba": {
      funFact: "These islands are known for their coral reefs, diving opportunities, and unique blend of cultures.",
      historicalFact: "Bonaire, Sint Eustatius, and Saba are special municipalities of the Netherlands, located in the Caribbean Sea."
  },
  "Bosnia and Herzegovina": {
      funFact: "Bosnia and Herzegovina is known for its diverse culture and stunning natural landscapes.",
      historicalFact: "Bosnia and Herzegovina was part of Yugoslavia until its independence in 1992, leading to the Bosnian War."
  },
  "Botswana": {
      funFact: "Botswana is home to the Okavango Delta, the largest inland delta in the world.",
      historicalFact: "Botswana gained independence from Britain in 1966 and has since become one of Africa's most stable democracies."
  },
  "Bouvet Island": {
      funFact: "Bouvet Island is one of the most remote islands in the world, located in the Southern Ocean.",
      historicalFact: "Bouvet Island was discovered by French explorer Jean-Baptiste Charles Bouvet de Lozier in 1739."
  },
  "Brazil": {
      funFact: "Brazil is known for its Amazon rainforest, carnival celebrations, and football (soccer) passion.",
      historicalFact: "Brazil was colonized by Portugal in the early 16th century and became independent in 1822."
  },
  "British Indian Ocean Territory": {
      funFact: "The British Indian Ocean Territory is home to the world's largest marine protected area, the Chagos Marine Reserve.",
      historicalFact: "The British Indian Ocean Territory is an overseas territory of the United Kingdom and has a controversial history regarding its native inhabitants."
  },
  "Brunei Darussalam": {
      funFact: "Brunei Darussalam is known for its wealth due to oil and gas reserves, and its cultural heritage.",
      historicalFact: "Brunei Darussalam was a powerful Malay sultanate before becoming a British protectorate in the 19th century."
  },
  "Bulgaria": {
      funFact: "Bulgaria is known for its beautiful Black Sea coastline, diverse landscapes, and Thracian archaeological sites.",
      historicalFact: "Bulgaria has a rich history dating back to ancient times and has been influenced by Greek, Roman, and Ottoman cultures."
  },
  "Burkina Faso": {
      funFact: "Burkina Faso is known for its lively culture, traditional music, and vibrant arts scene.",
      historicalFact: "Burkina Faso gained independence from France in 1960 and has experienced political instability and coups."
  },
  "Burundi": {
      funFact: "Burundi is known for its drumming traditions, beautiful landscapes, and diverse wildlife.",
      historicalFact: "Burundi was part of German East Africa and later a Belgian colony until it gained independence in 1962."
  },
  "Cabo Verde": {
      funFact: "Cabo Verde is known for its vibrant Creole culture, music, and beautiful beaches.",
      historicalFact: "Cabo Verde was uninhabited until Portuguese explorers arrived in the 15th century and established colonies."
  },
  "Cambodia": {
      funFact: "Cambodia is home to the world-famous Angkor Wat temple complex, a UNESCO World Heritage site.",
      historicalFact: "Cambodia was once the center of the powerful Khmer Empire, which ruled much of Southeast Asia from the 9th to 15th centuries."
  },
  "Cameroon": {
      funFact: "Cameroon is known for its diverse cultures, wildlife, and Mount Cameroon, the highest peak in West Africa.",
      historicalFact: "Cameroon was colonized by Germany and later divided between France and Britain after World War I, gaining independence in 1960."
  },
  "Canada": {
      funFact: "Canada is known for its stunning natural landscapes, including vast forests, lakes, and the Rocky Mountains.",
      historicalFact: "Canada was inhabited by indigenous peoples for thousands of years before European colonization, which began in the 15th century."
  },
  "Cayman Islands": {
      funFact: "The Cayman Islands are known for their crystal-clear waters, vibrant coral reefs, and offshore banking industry.",
      historicalFact: "The Cayman Islands have been a British overseas territory since the 18th century and are known for their economic stability."
  },
  "Central African Republic": {
      funFact: "The Central African Republic is known for its rich biodiversity and national parks, such as Dzanga-Sangha.",
      historicalFact: "The Central African Republic gained independence from France in 1960 and has experienced political instability and conflict."
  },
  "Chad": {
      funFact: "Chad is known for its Saharan landscapes, Lake Chad (the largest lake in Chad and the second-largest in Africa), and diverse cultures.",
      historicalFact: "Chad was formerly part of French Equatorial Africa and gained independence in 1960."
  },
  "Chile": {
      funFact: "Chile is famous for its long coastline, stunning landscapes (including the Atacama Desert), and vibrant culture.",
      historicalFact: "Chile gained independence from Spain in the early 19th century and has since experienced periods of political turmoil and economic growth."
  },
  "China": {
      funFact: "China is known for its rich history, diverse cultures, and contributions to philosophy, art, and science.",
      historicalFact: "China is one of the world's oldest civilizations, with a history dating back over 5,000 years."
  },
  "Christmas Island": {
      funFact: "Christmas Island is famous for its annual red crab migration, where millions of crabs move from the forest to the coast to breed.",
      historicalFact: "Christmas Island was discovered by Europeans on Christmas Day in 1643 and is now an Australian territory known for its unique biodiversity."
  },
  "Cocos (Keeling) Islands": {
      funFact: "The Cocos (Keeling) Islands are known for their pristine beaches, coral atolls, and rich marine life.",
      historicalFact: "The Cocos (Keeling) Islands were settled by the Clunies-Ross family in the 19th century and later became part of the British Empire."
  },
  "Colombia": {
      funFact: "Colombia is known for its coffee production, biodiversity (including the Amazon rainforest), and cultural festivals.",
      historicalFact: "Colombia was part of the Spanish Empire until it gained independence in 1810, becoming one of the first South American nations to do so."
  },
  "Comoros": {
      funFact: "Comoros is known for its volcanic islands, including Mount Karthala, an active volcano on Grand Comore.",
      historicalFact: "Comoros has a diverse culture influenced by African, Arab, and French heritage, and gained independence from France in 1975."
  },
  "Congo": {
      funFact: "The Republic of the Congo is known for its rainforests, wildlife, and vibrant music and dance traditions.",
      historicalFact: "The Republic of the Congo gained independence from France in 1960 and has experienced political instability and civil wars."
  },
  "Congo (Democratic Republic of the)": {
      funFact: "The Democratic Republic of the Congo (DRC) is known for its vast rainforests, wildlife (including mountain gorillas), and mineral wealth.",
      historicalFact: "The DRC was colonized by Belgium and was known as the Belgian Congo until gaining independence in 1960, followed by decades of political turmoil."
  },
  "Cook Islands": {
      funFact: "The Cook Islands are known for their stunning lagoons, coral reefs, and traditional Polynesian culture.",
      historicalFact: "The Cook Islands have been self-governing in free association with New Zealand since 1965, maintaining strong ties to both New Zealand and Polynesian traditions."
  },
  "Costa Rica": {
      funFact: "Costa Rica is known for its biodiversity, eco-tourism opportunities, and commitment to environmental conservation.",
      historicalFact: "Costa Rica abolished its military in 1949 and has since focused on education, health care, and environmental protection."
  },
  "Croatia": {
      funFact: "Croatia is known for its stunning Adriatic coastline, historic cities (like Dubrovnik and Split), and rich cultural heritage.",
      historicalFact: "Croatia declared independence from Yugoslavia in 1991, leading to the Croatian War of Independence."
  },
  "Cuba": {
      funFact: "Cuba is known for its vibrant music (like salsa and mambo), classic cars, and historic architecture in cities like Havana.",
      historicalFact: "Cuba was a Spanish colony until the Spanish-American War in 1898, after which it came under American influence and later became a socialist state."
  },
  "Curaçao": {
      funFact: "Curaçao is known for its colorful colonial architecture, vibrant culture, and world-class diving spots.",
      historicalFact: "Curaçao has a rich history shaped by Dutch colonization and its position as a trading hub in the Caribbean."
  },
  "Cyprus": {
      funFact: "Cyprus is known for its beautiful beaches, ancient ruins (including the archaeological site of Kourion), and warm Mediterranean climate.",
      historicalFact: "Cyprus has a history dating back to ancient times, with influences from Greek, Roman, Byzantine, and Ottoman civilizations."
  },
  "Czechia": {
      funFact: "Czechia is known for its historic castles, picturesque towns (like Český Krumlov and Prague), and world-renowned beer.",
      historicalFact: "Czechia has a rich cultural heritage shaped by its history in the Holy Roman Empire, Austro-Hungarian Empire, and Czechoslovakia."
  },
  "Denmark": {
      funFact: "Denmark is known for its fairy-tale castles, Viking history, and high standard of living.",
      historicalFact: "Denmark is one of the oldest monarchies in the world and was a powerful kingdom during the Viking Age."
  },
  "Djibouti": {
      funFact: "Djibouti is known for its strategic location at the entrance to the Red Sea, as well as its salt lakes and diverse marine life.",
      historicalFact: "Djibouti has been an important trading hub for centuries, connecting Africa, the Middle East, and Asia."
  },
  "Dominica": {
      funFact: "Dominica is known as the 'Nature Isle of the Caribbean' for its lush rainforests, waterfalls, and hot springs.",
      historicalFact: "Dominica was inhabited by indigenous peoples before being colonized by the French and later the British."
  },
  "Dominican Republic": {
      funFact: "The Dominican Republic is known for its pristine beaches, colonial architecture in Santo Domingo, and vibrant merengue music.",
      historicalFact: "The Dominican Republic was the site of the first permanent European settlement in the Americas, founded by Christopher Columbus in 1492."
  },
  "Ecuador": {
      funFact: "Ecuador is named after the equator, which runs through the country, and is known for its diverse ecosystems (from the Amazon rainforest to the Galápagos Islands).",
      historicalFact: "Ecuador was part of the Inca Empire until Spanish colonization in the 16th century, gaining independence in 1820."
  },
  "Egypt": {
      funFact: "Egypt is known for its ancient civilization, including the pyramids of Giza and the Sphinx, as well as its rich cultural heritage.",
      historicalFact: "Egypt is one of the world's oldest civilizations, with a history spanning over 5,000 years of pharaohs, conquests, and cultural achievements."
  },
  "El Salvador": {
      funFact: "El Salvador is known as the 'Land of Volcanoes' due to its many volcanoes and is famous for its surfing beaches.",
      historicalFact: "El Salvador gained independence from Spain in 1821 and has experienced periods of political unrest and civil war."
  },
  "Equatorial Guinea": {
      funFact: "Equatorial Guinea is one of the smallest countries in Africa and is known for its rich biodiversity and offshore oil reserves.",
      historicalFact: "Equatorial Guinea was a Spanish colony until gaining independence in 1968 and has been ruled by the same president since 1979."
  },
  "Eritrea": {
      funFact: "Eritrea is known for its ancient history, including the Kingdom of Aksum, and its diverse landscapes from the Red Sea coast to the highlands.",
      historicalFact: "Eritrea was an Italian colony until World War II, then under British administration, and later federated with Ethiopia before gaining independence in 1993."
  },
  "Estonia": {
      funFact: "Estonia is known for its digital innovation (e-governance), medieval architecture in Tallinn, and vast forests.",
      historicalFact: "Estonia has a history of Scandinavian, German, and Russian influences and gained independence in 1918, briefly interrupted by Soviet occupation, and regained in 1991."
  },
  "Eswatini": {
      funFact: "Eswatini (formerly Swaziland) is known for its rich culture, traditional ceremonies (like Umhlanga), and wildlife reserves.",
      historicalFact: "Eswatini is one of the last absolute monarchies in the world, gaining independence from Britain in 1968."
  },
  "Ethiopia": {
      funFact: "Ethiopia is one of the oldest nations in the world and is known for its ancient civilizations, Orthodox Christian heritage, and diverse landscapes.",
      historicalFact: "Ethiopia is the only African country that was never formally colonized (except for a brief Italian occupation during World War II) and has a history dating back thousands of years."
  },
  "Falkland Islands (Malvinas)": {
      funFact: "The Falkland Islands are known for their wildlife, including penguins and seals, and their status as a British overseas territory.",
      historicalFact: "The Falkland Islands have been the subject of a territorial dispute between Britain and Argentina, leading to the Falklands War in 1982."
  },
  "Faroe Islands": {
      funFact: "The Faroe Islands are known for their rugged landscapes, puffin colonies, and traditional Faroese culture.",
      historicalFact: "The Faroe Islands have been a self-governing territory of Denmark since 1948, with its own language and distinct cultural heritage."
  },
  "Fiji": {
      funFact: "Fiji is known for its stunning beaches, coral reefs, and friendly hospitality, as well as its rugby passion.",
      historicalFact: "Fiji was a British colony until gaining independence in 1970 and has a unique blend of Melanesian, Indian, European, and Chinese cultures."
  },
  "Finland": {
      funFact: "Finland is known as the 'Land of a Thousand Lakes' and is famous for its saunas, Northern Lights, and modern design.",
      historicalFact: "Finland was part of Sweden and later Russia before gaining independence in 1917, and has since become a global leader in education and technology."
  },
  "France": {
      funFact: "France is known for its art, fashion, cuisine (including wine and cheese), and iconic landmarks like the Eiffel Tower and Louvre Museum.",
      historicalFact: "France has played a pivotal role in European and world history, from the Renaissance and Enlightenment to the French Revolution and two World Wars."
  },
  "French Guiana": {
      funFact: "French Guiana is known for its Amazon rainforest, diverse wildlife, and space center (Centre Spatial Guyanais).",
      historicalFact: "French Guiana has been an overseas department of France since the 17th century and is one of the few regions of the world where European Space Agency launches take place."
  },
  "French Polynesia": {
      funFact: "French Polynesia is known for its stunning islands, overwater bungalows, and vibrant marine life.",
      historicalFact: "French Polynesia has been a French territory since the 19th century and has a rich Polynesian culture and history."
  },
  "French Southern Territories": {
      funFact: "The French Southern Territories are known for their remote location, subantarctic climate, and unique wildlife, including penguins and seals.",
      historicalFact: "The French Southern Territories are part of the French Southern and Antarctic Lands and are uninhabited except for scientific researchers and military personnel."
  },
  "Gabon": {
      funFact: "Gabon is known for its rainforests, wildlife (including gorillas and elephants), and efforts in conservation.",
      historicalFact: "Gabon gained independence from France in 1960 and has been relatively stable compared to its neighbors in Central Africa."
  },
  "Gambia": {
      funFact: "The Gambia is known for its diverse ecosystems, wildlife reserves, and vibrant cultural heritage.",
      historicalFact: "The Gambia gained independence from Britain in 1965 and is known as the 'Smiling Coast of Africa' due to its friendly people and welcoming atmosphere."
  },
  "Georgia": {
      funFact: "Georgia is known for its ancient churches, traditional polyphonic singing, and hospitality.",
      historicalFact: "Georgia has a rich history as one of the world's oldest wine-producing regions and has been influenced by Persian, Greek, Roman, Byzantine, and Ottoman civilizations."
  },
  "Germany": {
      funFact: "Germany is known for its engineering prowess, classical music composers (like Beethoven and Bach), and Oktoberfest celebrations.",
      historicalFact: "Germany has played a central role in European history, from the Holy Roman Empire to the Reformation, World Wars, and reunification in 1990."
  },
  "Ghana": {
      funFact: "Ghana is known for its vibrant culture, traditional kente cloth, and historical sites like Cape Coast Castle.",
      historicalFact: "Ghana was the first sub-Saharan African country to gain independence from colonial rule in 1957."
  },
  "Gibraltar": {
      funFact: "Gibraltar is known for its iconic rock, Barbary macaques, and strategic location at the entrance to the Mediterranean Sea.",
      historicalFact: "Gibraltar has been a British overseas territory since the early 18th century and has a unique blend of British and Mediterranean cultures."
  },
  "Greece": {
      funFact: "Greece is known for its ancient civilization (including the Acropolis and Parthenon), Mediterranean cuisine, and beautiful islands.",
      historicalFact: "Greece is considered the cradle of Western civilization, with a history that spans over 3,000 years of art, philosophy, democracy, and mythology."
  },
  "Greenland": {
      funFact: "Greenland is known for its vast ice sheet, Arctic landscapes, and indigenous Inuit culture.",
      historicalFact: "Greenland has been an autonomous territory of Denmark since 1979 and is one of the least densely populated places in the world."
  },
  "Grenada": {
      funFact: "Grenada is known as the 'Spice Isle' for its nutmeg production and is famous for its stunning beaches and lush rainforests.",
      historicalFact: "Grenada gained independence from Britain in 1974 and has a rich cultural heritage influenced by African, European, and Caribbean traditions."
  },
  "Guadeloupe": {
      funFact: "Guadeloupe is known for its beautiful beaches, lush rainforests, and French-Caribbean culture.",
      historicalFact: "Guadeloupe has been an overseas region of France since the 17th century and is part of the Lesser Antilles in the Caribbean Sea."
  },
  "Guam": {
      funFact: "Guam is known for its white sandy beaches, crystal-clear waters, and rich Chamorro culture.",
      historicalFact: "Guam has been a U.S. territory since 1898 and was a strategic military base during World War II."
  },
  "Guatemala": {
      funFact: "Guatemala is known for its Mayan ruins (such as Tikal), vibrant indigenous culture, and volcanic landscapes.",
      historicalFact: "Guatemala was part of the Mayan civilization before being conquered by the Spanish in the 16th century, gaining independence in 1821."
  },
  "Guernsey": {
      funFact: "Guernsey is known for its stunning coastline, historic sites (like Castle Cornet), and status as a tax haven.",
      historicalFact: "Guernsey is a British Crown dependency with its own government and legal system, dating back to medieval times."
  },
  "Guinea": {
      funFact: "Guinea is known for its rich cultural heritage, including traditional music and dance, and diverse landscapes.",
      historicalFact: "Guinea gained independence from France in 1958 and has experienced political instability and authoritarian rule."
  },
  "Guinea-Bissau": {
      funFact: "Guinea-Bissau is known for its wildlife reserves, vibrant music (like gumbe rhythms), and Portuguese creole culture.",
      historicalFact: "Guinea-Bissau gained independence from Portugal in 1973 and has faced political instability and military coups."
  },
  "Guyana": {
      funFact: "Guyana is known for its diverse wildlife (including the giant otter), pristine rainforests, and Kaieteur Falls.",
      historicalFact: "Guyana was a British colony until gaining independence in 1966 and is the only English-speaking country in South America."
  },
  "Haiti": {
      funFact: "Haiti is known for its vibrant art, music (like rara and kompa), and being the first independent nation in Latin America and the Caribbean.",
      historicalFact: "Haiti gained independence from France in 1804 after a successful slave revolt, becoming the first black-led republic in the world."
  },
  "Honduras": {
      funFact: "Honduras is known for its ancient Mayan ruins, Caribbean and Pacific coastlines, and diverse ecosystems.",
      historicalFact: "Honduras was part of the Mayan civilization before being colonized by the Spanish in the 16th century, gaining independence in 1821."
  },
  "Hong Kong": {
      funFact: "Hong Kong is known for its skyline, bustling harbor, and vibrant cultural scene that blends Eastern and Western influences.",
      historicalFact: "Hong Kong was a British colony until 1997, when it was returned to China under the 'one country, two systems' principle."
  },
  "Hungary": {
      funFact: "Hungary is known for its thermal baths, historic architecture (such as Buda Castle), and cuisine featuring paprika.",
      historicalFact: "Hungary has a rich history as part of the Austro-Hungarian Empire and later as a Soviet satellite state before transitioning to a parliamentary republic."
  },
  "Iceland": {
      funFact: "Iceland is known for its stunning landscapes (including geysers and glaciers), Viking heritage, and renewable energy sources.",
      historicalFact: "Iceland was settled by Vikings in the 9th century and later became part of the Norwegian and then Danish kingdoms before gaining independence in 1944."
  },
  "India": {
      funFact: "India is known for its diverse cultures, vibrant festivals (like Diwali and Holi), and ancient monuments (including the Taj Mahal).",
      historicalFact: "India has a rich history dating back thousands of years, with significant contributions to mathematics, astronomy, religion, and philosophy."
  },
  "Indonesia": {
      funFact: "Indonesia is known for its thousands of islands, diverse cultures, and wildlife such as orangutans and Komodo dragons.",
      historicalFact: "Indonesia has been influenced by Indian, Chinese, and Arab traders and was later colonized by the Dutch before gaining independence in 1945."
  },
  "Iran": {
      funFact: "Iran is known for its ancient Persian civilization, Islamic architecture (like mosques and palaces), and hospitality.",
      historicalFact: "Iran (formerly Persia) has a history dating back over 5,000 years and has been a major cultural and intellectual center in the Middle East."
  },
  "Iraq": {
      funFact: "Iraq is known for its ancient Mesopotamian history, including the ruins of Babylon and Assyrian artifacts, as well as its rich cultural heritage.",
      historicalFact: "Iraq is part of the Cradle of Civilization, with a history that includes Sumer, Babylon, and the Abbasid Caliphate, among others."
  },
  "Ireland": {
      funFact: "Ireland is known for its lush green landscapes, Celtic music and dance (like Irish step dancing), and friendly hospitality.",
      historicalFact: "Ireland has a history shaped by Celtic tribes, Viking raids, Norman invasion, and British colonization, leading to the Republic of Ireland's independence in 1922."
  },
  "Isle of Man": {
      funFact: "The Isle of Man is known for its motorcycle races (TT races), Viking heritage, and scenic coastline.",
      historicalFact: "The Isle of Man has been a self-governing British Crown dependency since the Middle Ages, with its own parliament and legal system."
  },
  "Israel": {
      funFact: "Israel is known for its religious significance (including Jerusalem's Old City), innovation in technology (especially in cybersecurity and agriculture), and vibrant culture.",
      historicalFact: "Israel has a history dating back thousands of years, with periods of Jewish kingdoms, Roman rule, and Ottoman influence before becoming an independent state in 1948."
  },
  "Italy": {
      funFact: "Italy is known for its art (including Renaissance masterpieces), fashion (like Milan), cuisine (pizza and pasta), and historic landmarks (like the Colosseum).",
      historicalFact: "Italy has a rich history as the center of the Roman Empire, Renaissance, and birthplace of the Renaissance, and has been influential in art, culture, and architecture."
  },
  "Jamaica": {
      funFact: "Jamaica is known for its reggae music (including Bob Marley), vibrant culture, beautiful beaches, and Blue Mountain coffee.",
      historicalFact: "Jamaica was a Spanish and later British colony until gaining independence in 1962 and has a diverse cultural heritage shaped by African, European, and Asian influences."
  },
  "Japan": {
      funFact: "Japan is known for its blend of tradition and modernity, cherry blossoms (sakura), sushi, and technological innovation.",
      historicalFact: "Japan has a history that dates back thousands of years, influenced by Shinto and Buddhist traditions, periods of imperial rule, feudalism, and modernization."
  },
  "Jersey": {
      funFact: "Jersey is known for its picturesque landscapes, historic sites (like Mont Orgueil Castle), and status as a tax haven.",
      historicalFact: "Jersey is a British Crown dependency with its own government and legal system, influenced by both French and British cultures."
  },
  "Jordan": {
      funFact: "Jordan is known for its ancient city of Petra, Dead Sea (the lowest point on Earth), and warm hospitality.",
      historicalFact: "Jordan has a history dating back to ancient civilizations such as the Nabateans, Romans, and Byzantines, and has been influenced by Arab and Islamic culture."
  },
  "Kazakhstan": {
      funFact: "Kazakhstan is known for its vast steppes, nomadic heritage, and Baikonur Cosmodrome (the world's first and largest space launch facility).",
      historicalFact: "Kazakhstan has a history of nomadic tribes, Russian colonization, and Soviet rule before gaining independence in 1991."
  },
  "Kenya": {
      funFact: "Kenya is known for its diverse wildlife (including the Big Five: lion, elephant, buffalo, leopard, and rhino), stunning landscapes, and Maasai culture.",
      historicalFact: "Kenya was a British colony until gaining independence in 1963 and has a rich history of ancient civilizations, trade, and colonialism."
  },
  "Kiribati": {
      funFact: "Kiribati is known for its coral atolls, world-class fishing, and being the only country to fall into all four hemispheres (Northern, Southern, Eastern, and Western).",
      historicalFact: "Kiribati has a history of British colonization and has faced challenges such as rising sea levels due to climate change."
  },
  "Kosovo": {
      funFact: "Kosovo is known for its vibrant youth culture, traditional cuisine, and historical sites like the Gracanica Monastery.",
      historicalFact: "Kosovo declared independence from Serbia in 2008, a move recognized by many countries but not by others, leading to ongoing geopolitical tensions."
  },
  "Kuwait": {
      funFact: "Kuwait is known for its modern architecture, oil reserves, and traditional Arab culture.",
      historicalFact: "Kuwait gained independence from Britain in 1961 and has since become one of the wealthiest countries in the Arab world due to its oil exports."
  },
  "Kyrgyzstan": {
      funFact: "Kyrgyzstan is known for its nomadic traditions, stunning mountain landscapes (including the Tian Shan range), and hospitality.",
      historicalFact: "Kyrgyzstan was part of the Silk Road and has been influenced by various cultures and empires, including the Mongols, Russians, and Soviets, before gaining independence in 1991."
  },
  "Laos": {
      funFact: "Laos is known for its mountainous terrain, Buddhist monasteries (like Luang Prabang), and traditional arts and crafts.",
      historicalFact: "Laos has a history influenced by Indian and Chinese traders, Khmer and Thai kingdoms, and French colonization before gaining independence in 1954."
  },
  "Latvia": {
      funFact: "Latvia is known for its diverse landscapes (from sandy beaches to dense forests), medieval architecture in Riga, and strong tradition of song and dance.",
      historicalFact: "Latvia has a history of Germanic and Russian influences and was part of the Hanseatic League and later the Russian Empire before gaining independence in 1918, then occupied by the Soviet Union, and regained independence in 1991."
  },
  "Lebanon": {
      funFact: "Lebanon is known for its Mediterranean cuisine (like hummus and falafel), ancient ruins (like Baalbek), and vibrant nightlife in Beirut.",
      historicalFact: "Lebanon has a history dating back to ancient Phoenicia, followed by Roman, Ottoman, and French rule, and has faced periods of conflict and reconstruction."
  },
  "Lesotho": {
      funFact: "Lesotho is known as the 'Kingdom in the Sky' for its high-altitude terrain and is famous for its traditional woven blankets and Basotho culture.",
      historicalFact: "Lesotho was a British protectorate until gaining independence in 1966 and has a unique geography entirely surrounded by South Africa."
  },
  "Liberia": {
      funFact: "Liberia is known for being founded by freed American slaves, its lush rainforests, and vibrant music and dance.",
      historicalFact: "Liberia was founded as a colony for freed African-American slaves in the early 19th century and has a complex history of political instability and civil war."
  },
  "Libya": {
      funFact: "Libya is known for its ancient Roman and Greek ruins (like Leptis Magna), Sahara Desert landscapes, and Mediterranean coastline.",
      historicalFact: "Libya has a history dating back to ancient civilizations such as the Phoenicians and was later part of the Roman Empire, Ottoman Empire, and Italian colonization before gaining independence in 1951."
  },
  "Liechtenstein": {
      funFact: "Liechtenstein is known for its alpine scenery, Vaduz Castle, and being one of the world's smallest countries.",
      historicalFact: "Liechtenstein has a history dating back to the Holy Roman Empire and has been a principality since 1719, remaining neutral and prosperous through various European conflicts."
  },
  "Lithuania": {
      funFact: "Lithuania is known for its Baltic coastline, medieval castles (like Trakai Island Castle), and traditional folk music and festivals.",
      historicalFact: "Lithuania has a history of grand duchies, Polish-Lithuanian Commonwealth, and Russian Empire before gaining independence in 1918, occupied by the Soviet Union and Nazi Germany, and regaining independence in 1990."
  },
  "Luxembourg": {
      funFact: "Luxembourg is known for its fortified medieval old town, financial sector, and multicultural society.",
      historicalFact: "Luxembourg has a history of strategic importance due to its fortress and has been influenced by various European powers, gaining full independence in 1867."
  },
  "Macao": {
      funFact: "Macao is known for its blend of Portuguese and Chinese cultures, vibrant casinos, and UNESCO-listed historic center.",
      historicalFact: "Macao was a Portuguese colony until 1999, when it was returned to China as a Special Administrative Region (SAR) under the 'one country, two systems' principle."
  },
  "Madagascar": {
      funFact: "Madagascar is known for its unique wildlife (like lemurs and chameleons), biodiversity, and traditional Malagasy culture.",
      historicalFact: "Madagascar has a history influenced by Southeast Asian, African, and Arab traders, colonized by the French, and gaining independence in 1960."
  },
  "Malawi": {
      funFact: "Malawi is known for its scenic landscapes (including Lake Malawi), diverse wildlife, and vibrant culture.",
      historicalFact: "Malawi gained independence from Britain in 1964 and has faced challenges such as poverty and HIV/AIDS."
  },
  "Malaysia": {
      funFact: "Malaysia is known for its diverse cultures (Malay, Chinese, Indian), stunning islands (like Langkawi), and cuisine (including laksa and nasi lemak).",
      historicalFact: "Malaysia has a history influenced by Hindu, Buddhist, and Islamic kingdoms, Portuguese and Dutch colonization, and British rule before gaining independence in 1957."
  },
  "Maldives": {
      funFact: "The Maldives is known for its luxury resorts, coral reefs (popular for diving), and turquoise waters.",
      historicalFact: "The Maldives has a history of Buddhist kingdoms and Islamic sultanates, followed by Portuguese and Dutch influence before becoming a British protectorate and gaining independence in 1965."
  },
  "Mali": {
      funFact: "Mali is known for its ancient city of Timbuktu, vibrant music (like the griot tradition), and diverse cultures.",
      historicalFact: "Mali was part of the West African empires of Ghana, Mali, and Songhai before falling under French control and gaining independence in 1960."
  },
  "Malta": {
      funFact: "Malta is known for its ancient temples (like Ħaġar Qim), Baroque architecture (including St. John's Co-Cathedral), and crystal-clear waters.",
      historicalFact: "Malta has a history dating back to ancient civilizations such as the Phoenicians and has been ruled by the Romans, Arabs, Knights of St. John, French, and British before gaining independence in 1964."
  },
  "Marshall Islands": {
      funFact: "The Marshall Islands are known for their coral atolls, World War II history (such as the Battle of Kwajalein), and being a U.S. associated state.",
      historicalFact: "The Marshall Islands were part of the Trust Territory of the Pacific Islands under U.S. administration before becoming a sovereign nation in free association with the United States in 1986."
  },
  "Martinique": {
      funFact: "Martinique is known for its stunning beaches, volcanic landscapes (including Mount Pelée), and French-Caribbean culture.",
      historicalFact: "Martinique has been an overseas region of France since the 17th century and is part of the Lesser Antilles in the Caribbean Sea."
  },
  "Mauritania": {
      funFact: "Mauritania is known for its Sahara Desert landscapes, ancient caravan routes, and rich Moorish culture.",
      historicalFact: "Mauritania gained independence from France in 1960 and has faced challenges such as political instability and slavery."
  },
  "Mauritius": {
      funFact: "Mauritius is known for its stunning beaches, coral reefs (popular for diving), and multicultural society.",
      historicalFact: "Mauritius has a history of Dutch, French, and British colonization, followed by independence in 1968, and has become a diverse and prosperous nation."
  },
  "Mayotte": {
      funFact: "Mayotte is known for its beautiful beaches, coral reefs, and blend of French and Malagasy cultures.",
      historicalFact: "Mayotte has been an overseas department and region of France since the 19th century and is part of the Comoros Archipelago in the Indian Ocean."
  },
  "Mexico": {
      funFact: "Mexico is known for its ancient civilizations (like the Aztecs and Maya), vibrant culture (including mariachi music), and cuisine (like tacos and mole).",
      historicalFact: "Mexico has a rich history dating back to indigenous civilizations, followed by Spanish colonization, and has played a pivotal role in Latin American independence movements."
  },
  "Micronesia (Federated States of)": {
      funFact: "Micronesia is known for its tropical islands, World War II history, and vibrant traditional culture.",
      historicalFact: "Micronesia gained independence in free association with the United States in 1986 and consists of four states spread across the western Pacific Ocean."
  },
  "Moldova": {
      funFact: "Moldova is known for its vineyards and wine production, monasteries (like Orheiul Vechi), and diverse cultural heritage.",
      historicalFact: "Moldova has a history influenced by Roman, Ottoman, and Russian empires, gaining independence from the Soviet Union in 1991."
  },
  "Monaco": {
      funFact: "Monaco is known for its luxury casinos, Formula 1 Grand Prix, and being one of the world's smallest countries.",
      historicalFact: "Monaco has been ruled by the Grimaldi family since the 13th century and has been a principality since the 17th century, known for its prosperity and glamorous lifestyle."
  },
  "Mongolia": {
      funFact: "Mongolia is known for its nomadic culture, Genghis Khan's empire, vast steppes, and traditional Naadam festival (featuring wrestling, horse racing, and archery).",
      historicalFact: "Mongolia was the seat of the Mongol Empire in the 13th and 14th centuries and later fell under Chinese and Soviet influence before transitioning to a democratic republic in 1990."
  },
  "Montenegro": {
      funFact: "Montenegro is known for its Adriatic coast, medieval towns (like Kotor), and rugged mountains (including Durmitor National Park).",
      historicalFact: "Montenegro has a history of independence, Ottoman and Venetian rule, union with Serbia and Yugoslavia, and regained independence in 2006."
  },
  "Montserrat": {
      funFact: "Montserrat is known for its Soufrière Hills volcano, black sand beaches, and Irish heritage.",
      historicalFact: "Montserrat has been a British Overseas Territory since the 17th century and has faced challenges due to volcanic eruptions, leading to significant emigration."
  },
  "Morocco": {
      funFact: "Morocco is known for its vibrant souks (markets), historic cities (like Marrakech and Fes), and diverse landscapes (from the Sahara Desert to the Atlas Mountains).",
      historicalFact: "Morocco has a history dating back to ancient Berber, Roman, and Islamic civilizations, followed by French and Spanish colonization and gaining independence in 1956."
  },
  "Mozambique": {
      funFact: "Mozambique is known for its stunning coastline, Swahili culture, and wildlife reserves (like Gorongosa National Park).",
      historicalFact: "Mozambique gained independence from Portugal in 1975 and has faced challenges such as civil war and natural disasters."
  },
  "Myanmar": {
      funFact: "Myanmar is known for its pagodas (like Shwedagon Pagoda), diverse ethnic groups, and traditional longyi clothing.",
      historicalFact: "Myanmar has a history dating back to ancient civilizations, Buddhist kingdoms, British colonization, and military rule, transitioning to a civilian government in recent years."
  },
  "Namibia": {
      funFact: "Namibia is known for its vast desert landscapes (like the Namib Desert), wildlife (including cheetahs and desert-adapted elephants), and diverse cultures.",
      historicalFact: "Namibia has a history shaped by indigenous San, Nama, and Herero peoples, German colonization, South African rule, and gaining independence in 1990."
  },
  "Nauru": {
      funFact: "Nauru is known for its phosphate mining industry, coral reefs, and being one of the world's smallest independent nations.",
      historicalFact: "Nauru gained independence from Australia in 1968 and has faced challenges such as environmental degradation due to phosphate mining."
  },
  "Nepal": {
      funFact: "Nepal is known for its Himalayan mountains (including Mount Everest), Hindu and Buddhist temples, and diverse cultures.",
      historicalFact: "Nepal has a history influenced by ancient kingdoms, Hindu and Buddhist traditions, and has remained independent throughout its history despite influences from neighboring empires."
  },
  "Netherlands": {
      funFact: "The Netherlands is known for its tulip fields, windmills, cycling routes, and canals (like those in Amsterdam).",
      historicalFact: "The Netherlands has a history as a maritime and trading power, Dutch Golden Age, colonial empire, and modern democracy with a reputation for liberalism and tolerance."
  },
  "New Caledonia": {
      funFact: "New Caledonia is known for its vibrant coral reefs, Melanesian culture, and scenic landscapes (like the Heart of Voh).",
      historicalFact: "New Caledonia has been a French territory since the 19th century and has faced calls for independence, leading to political negotiations and referendums."
  },
  "New Zealand": {
      funFact: "New Zealand is known for its stunning landscapes (from mountains to beaches), Maori culture, and adventure sports (like bungee jumping).",
      historicalFact: "New Zealand was settled by Polynesians, later discovered by Europeans, and has a history shaped by Maori and British influences, becoming an independent nation in the British Commonwealth."
  },
  "Nicaragua": {
      funFact: "Nicaragua is known for its lakes (like Lake Nicaragua), volcanoes (such as Momotombo), and diverse wildlife (including sea turtles and jaguars).",
      historicalFact: "Nicaragua has a history of indigenous civilizations, Spanish colonization, and political unrest, including the Sandinista Revolution and Contra War in the 20th century."
  },
  "Niger": {
      funFact: "Niger is known for its Saharan desert landscapes, nomadic Tuareg culture, and diverse wildlife in national parks like W National Park.",
      historicalFact: "Niger has a history of ancient kingdoms, Islamic empires, and French colonization, gaining independence in 1960."
  },
  "Nigeria": {
      funFact: "Nigeria is known for its diverse cultures (including Yoruba, Igbo, and Hausa-Fulani), Nollywood film industry, and vibrant music scene (like Afrobeat).",
      historicalFact: "Nigeria has a history of ancient civilizations like the Nok culture, powerful kingdoms (such as the Benin Empire), and British colonization before gaining independence in 1960."
  },
  "Niue": {
      funFact: "Niue is known for its limestone cliffs, coral reefs, and being one of the world's largest coral islands.",
      historicalFact: "Niue has been self-governing in free association with New Zealand since 1974 and is known for its natural beauty and close-knit community."
  },
  "Norfolk Island": {
      funFact: "Norfolk Island is known for its convict history, lush pine forests, and scenic coastline.",
      historicalFact: "Norfolk Island has been a territory of Australia since 1914, with a history that includes British colonization and penal settlements."
  },
  "North Korea": {
      funFact: "North Korea is known for its socialist state ideology (Juche), military parades, and limited external communications.",
      historicalFact: "North Korea has a history of isolationism, Korean War, and socialist rule under the Kim dynasty, with ongoing international scrutiny and human rights concerns."
  },
  "North Macedonia": {
      funFact: "North Macedonia is known for its scenic Lake Ohrid, Ottoman heritage, and traditional Macedonian cuisine.",
      historicalFact: "North Macedonia gained independence from Yugoslavia in 1991 and has a diverse cultural heritage shaped by Byzantine, Ottoman, and Slavic influences."
  },
  "Northern Mariana Islands": {
      funFact: "The Northern Mariana Islands are known for their tropical beaches, World War II history, and traditional Chamorro culture.",
      historicalFact: "The Northern Mariana Islands are a U.S. Commonwealth in the Pacific Ocean, with a history of Spanish, German, and Japanese colonization before becoming a U.S. territory."
  },
  "Norway": {
      funFact: "Norway is known for its fjords (like the Geirangerfjord), Northern Lights, Viking heritage, and quality of life.",
      historicalFact: "Norway has a history dating back to the Vikings, followed by union with Denmark and Sweden, and gaining full independence in 1905, becoming a prosperous constitutional monarchy."
  },
  "Oman": {
      funFact: "Oman is known for its stunning desert landscapes, Arabian Sea coastline, and historic forts and castles.",
      historicalFact: "Oman has a history of maritime trade, Portuguese and Ottoman rule, and has been ruled by the Al Said dynasty since the 18th century."
  },
  "Pakistan": {
      funFact: "Pakistan is known for its diverse landscapes (including the Karakoram Mountains and Thar Desert), rich history, and cultural heritage.",
      historicalFact: "Pakistan has a history dating back to ancient Indus Valley Civilization, followed by Persian, Greek, Islamic, and British influences, and gaining independence in 1947."
  },
  "Palau": {
      funFact: "Palau is known for its vibrant coral reefs, World War II history, and traditional Palauan culture.",
      historicalFact: "Palau gained independence in free association with the United States in 1994 and is known for its natural beauty and marine biodiversity."
  },
  "Palestine": {
      funFact: "Palestine is known for its cultural heritage (including Bethlehem and Jericho), political complexity, and religious significance.",
      historicalFact: "Palestine has a history dating back thousands of years, with significant importance in Judaism, Christianity, and Islam, and has faced ongoing conflict and international diplomacy."
  },
  "Panama": {
      funFact: "Panama is known for its canal connecting the Atlantic and Pacific Oceans, diverse wildlife (including sloths and toucans), and vibrant culture.",
      historicalFact: "Panama has a history influenced by indigenous civilizations, Spanish colonization, and strategic importance as a trade and transportation hub."
  },
  "Papua New Guinea": {
      funFact: "Papua New Guinea is known for its cultural diversity (with over 800 languages spoken), tropical rainforests, and traditional tribal communities.",
      historicalFact: "Papua New Guinea has a history of diverse indigenous cultures, European exploration, German and Australian rule, and gaining independence in 1975."
  },
  "Paraguay": {
      funFact: "Paraguay is known for its Jesuit missions (like La Santísima Trinidad de Paraná), Guarani culture, and traditional folk music (like polka).",
      historicalFact: "Paraguay has a history of indigenous civilizations, Jesuit missions, Spanish colonization, and later independence movements, including the Paraguayan War."
  },
  "Peru": {
      funFact: "Peru is known for its ancient Incan city of Machu Picchu, Amazon rainforest, Andean mountains, and vibrant cultural festivals.",
      historicalFact: "Peru has a history dating back to indigenous civilizations like the Inca, followed by Spanish colonization and independence led by figures like Simón Bolívar."
  },
  "Philippines": {
      funFact: "The Philippines is known for its stunning beaches (like Boracay), vibrant festivals (like Sinulog), and rich marine biodiversity.",
      historicalFact: "The Philippines has a history of indigenous kingdoms, Spanish colonization, American rule, and independence struggles, becoming a diverse and resilient nation."
  },
  "Pitcairn Islands": {
      funFact: "The Pitcairn Islands are known for their remote location, Mutiny on the Bounty history, and being one of the world's least populated territories.",
      historicalFact: "The Pitcairn Islands are a British Overseas Territory in the Pacific Ocean, known for the mutiny and settlement by the HMS Bounty crew descendants."
  },
  "Poland": {
      funFact: "Poland is known for its medieval architecture (like Kraków's Old Town), hearty cuisine (including pierogi), and vibrant music scene.",
      historicalFact: "Poland has a history dating back to Slavic tribes, followed by the Polish-Lithuanian Commonwealth, partitions by neighboring powers, and regaining independence in 1918."
  },
  "Portugal": {
      funFact: "Portugal is known for its historic cities (like Lisbon and Porto), Atlantic coastline, Fado music, and pastel de nata (custard tart).",
      historicalFact: "Portugal has a history of maritime exploration, colonial empire, Carnation Revolution, and transition to a modern democratic nation within the European Union."
  },
  "Puerto Rico": {
      funFact: "Puerto Rico is known for its Caribbean beaches, Old San Juan's colonial architecture, and vibrant salsa music scene.",
      historicalFact: "Puerto Rico is a U.S. territory with a history shaped by Taíno indigenous culture, Spanish colonization, and U.S. influence."
  },
  "Qatar": {
      funFact: "Qatar is known for its modern skyline (including the Doha skyline), Arabian Desert landscapes, and luxury shopping.",
      historicalFact: "Qatar has a history of nomadic tribes, pearling industry, and British protectorate status before gaining independence in 1971 and becoming a wealthy Gulf nation."
  },
  "Réunion": {
      funFact: "Réunion is known for its volcanic landscapes (including Piton de la Fournaise), Creole cuisine, and stunning beaches.",
      historicalFact: "Réunion is an overseas department and region of France in the Indian Ocean, known for its diverse culture and natural beauty."
  },
  "Romania": {
      funFact: "Romania is known for its medieval castles (like Bran Castle), Carpathian Mountains, and folklore traditions (including Dracula).",
      historicalFact: "Romania has a history dating back to ancient Dacian civilizations, Roman conquest, medieval kingdoms, Ottoman and Austro-Hungarian empires, and modern independence."
  },
  "Russia": {
      funFact: "Russia is known for its expansive landscapes (from Siberian tundra to Black Sea beaches), rich cultural heritage, and iconic architecture (like St. Basil's Cathedral).",
      historicalFact: "Russia has a history dating back to ancient Slavic tribes, followed by the Kievan Rus', Mongol invasions, Tsarist autocracy, Soviet era, and modern Russian Federation."
  },
  "Rwanda": {
      funFact: "Rwanda is known for its mountain gorillas (found in Volcanoes National Park), lush rainforests, and traditional drumming and dance.",
      historicalFact: "Rwanda has a history of indigenous kingdoms, Belgian colonization, and tragic genocide in 1994, followed by reconciliation and economic development efforts."
  },
  "Saint Barthélemy": {
      funFact: "Saint Barthélemy is known for its chic beaches, luxury shopping boutiques, and French-Caribbean cuisine.",
      historicalFact: "Saint Barthélemy is an overseas collectivity of France in the Caribbean, known for its upscale tourism and European charm."
  },
  "Saint Helena, Ascension and Tristan da Cunha": {
      funFact: "Saint Helena is known for its Napoleonic heritage, Ascension Island for its green sea turtles, and Tristan da Cunha for being one of the world's most remote islands.",
      historicalFact: "Saint Helena, Ascension, and Tristan da Cunha are British Overseas Territories in the South Atlantic Ocean, each with unique histories and landscapes."
  },
  "Saint Kitts and Nevis": {
      funFact: "Saint Kitts and Nevis is known for its Caribbean beaches, historic plantation estates, and annual music festivals.",
      historicalFact: "Saint Kitts and Nevis is one of the smallest countries in the Americas, with a history of British colonization and gaining independence in 1983."
  },
  "Saint Lucia": {
      funFact: "Saint Lucia is known for its volcanic landscapes (including the Pitons), lush rainforests, and Creole cuisine.",
      historicalFact: "Saint Lucia has a history of indigenous Arawak and Carib peoples, European colonization, and has been ruled alternately by the French and British before gaining independence in 1979."
  },
  "Saint Martin (French part)": {
      funFact: "Saint Martin is known for its dual nationality (French and Dutch), beautiful beaches, and blend of Caribbean and European cultures.",
      historicalFact: "Saint Martin is divided between French and Dutch control, with the French part being an overseas collectivity of France known for tourism and cultural diversity."
  },
  "Saint Pierre and Miquelon": {
      funFact: "Saint Pierre and Miquelon are known for their French heritage, cold waters rich in fish stocks, and traditional fishing culture.",
      historicalFact: "Saint Pierre and Miquelon are French overseas collectivities near Canada, with a history of fishing, smuggling during Prohibition, and maintaining French culture in North America."
  },
  "Saint Vincent and the Grenadines": {
      funFact: "Saint Vincent and the Grenadines are known for their volcanic landscapes, coral reefs, and vibrant festivals (like Vincy Mas).",
      historicalFact: "Saint Vincent and the Grenadines has a history of indigenous Carib peoples, European colonization, African slavery, and gaining independence from Britain in 1979."
  },
  "Samoa": {
      funFact: "Samoa is known for its traditional fa'a Samoa culture, stunning beaches, and Polynesian traditions (including tattooing).",
      historicalFact: "Samoa has a history of indigenous Polynesian culture, German and New Zealand colonial rule, and becoming the first Pacific island nation to gain independence in 1962."
  },
  "San Marino": {
      funFact: "San Marino is known for its medieval hilltop towers, being one of the world's oldest republics, and scenic Apennine landscapes.",
      historicalFact: "San Marino has a history dating back to its foundation as a monastic community in 301 AD, remaining independent throughout the centuries as a republic."
  },
  "Sao Tome and Principe": {
      funFact: "Sao Tome and Principe are known for their cocoa production, lush rainforests, and volcanic landscapes.",
      historicalFact: "Sao Tome and Principe gained independence from Portugal in 1975 and have a history of cocoa plantations and colonial heritage."
  },
  "Saudi Arabia": {
      funFact: "Saudi Arabia is known for its Islamic heritage (including Mecca and Medina), vast deserts (like the Rub' al Khali), and modern cities (like Riyadh).",
      historicalFact: "Saudi Arabia has a history dating back to ancient civilizations along the Arabian Peninsula, Islamic caliphates, and modern unification under the House of Saud."
  },
  "Senegal": {
      funFact: "Senegal is known for its vibrant music scene (including mbalax), historic cities (like Saint-Louis), and rich cultural heritage.",
      historicalFact: "Senegal has a history of powerful African empires, French colonization, and gaining independence as a stable democracy in 1960."
  },
  "Serbia": {
      funFact: "Serbia is known for its historic monasteries (like Studenica Monastery), vibrant nightlife in Belgrade, and traditional Serbian cuisine.",
      historicalFact: "Serbia has a history dating back to ancient civilizations like the Romans and Byzantines, medieval Serbian kingdoms, Ottoman and Austro-Hungarian rule, and modern independence."
  },
  "Seychelles": {
      funFact: "Seychelles is known for its luxury resorts, crystal-clear waters, and rare wildlife (including giant tortoises and seabirds).",
      historicalFact: "Seychelles has a history of French and British colonization, African slave trade, and gaining independence as a democratic republic in 1976."
  },
  "Sierra Leone": {
      funFact: "Sierra Leone is known for its diamond mines, tropical rainforests, and vibrant Krio culture.",
      historicalFact: "Sierra Leone has a history of indigenous tribes, British colonization, and challenges such as the Atlantic slave trade and civil war."
  },
  "Singapore": {
      funFact: "Singapore is known for its futuristic cityscape, multicultural society, and vibrant street food scene (like hawker centers).",
      historicalFact: "Singapore has a history as a trading port, British colony, Japanese occupation during World War II, and gaining independence in 1965, becoming a global financial hub."
  },
  "Sint Maarten (Dutch part)": {
      funFact: "Sint Maarten is known for its dual nationality (Dutch and French), beautiful beaches, and vibrant nightlife.",
      historicalFact: "Sint Maarten is divided between Dutch and French control, with the Dutch part being a constituent country of the Kingdom of the Netherlands known for tourism and cultural diversity."
  },
  "Slovakia": {
      funFact: "Slovakia is known for its Carpathian Mountains, medieval castles (like Spiš Castle), and traditional folk architecture.",
      historicalFact: "Slovakia has a history of Slavic tribes, Hungarian and Austro-Hungarian rule, Czechoslovakia, and independence as a sovereign nation in 1993."
  },
  "Slovenia": {
      funFact: "Slovenia is known for its Julian Alps, picturesque lakes (like Lake Bled), and charming capital city (Ljubljana).",
      historicalFact: "Slovenia has a history of Slavic settlement, Holy Roman Empire, Habsburg rule, Yugoslav federation, and independence in 1991, becoming a modern European nation."
  },
  "Solomon Islands": {
      funFact: "The Solomon Islands are known for their World War II history (like Guadalcanal), tropical rainforests, and traditional Melanesian culture.",
      historicalFact: "The Solomon Islands have a history of indigenous cultures, Spanish and British exploration, World War II battles, and gaining independence in 1978."
  },
  "Somalia": {
      funFact: "Somalia is known for its historic port cities (like Mogadishu), camel culture, and ancient Somali architecture.",
      historicalFact: "Somalia has a history of ancient civilizations, trade networks, Italian and British colonialism, and challenges such as civil war and piracy."
  },
  "South Africa": {
      funFact: "South Africa is known for its diverse landscapes (from Kruger National Park to Cape Town's beaches), multicultural society, and wine production.",
      historicalFact: "South Africa has a history dating back to indigenous San and Khoikhoi peoples, Dutch settlement, British colonization, apartheid, and transition to democracy in 1994."
  },
  "South Georgia and the South Sandwich Islands": {
      funFact: "South Georgia and the South Sandwich Islands are known for their remote polar landscapes, abundant wildlife, and historic whaling stations.",
      historicalFact: "South Georgia and the South Sandwich Islands are British Overseas Territories in the Southern Ocean, known for their importance in polar exploration and wildlife conservation."
  },
  "South Korea": {
      funFact: "South Korea is known for its technology industry, K-pop music, vibrant cities (like Seoul), and traditional Korean cuisine.",
      historicalFact: "South Korea has a history of ancient kingdoms, Japanese occupation, Korean War, economic growth, and becoming a global leader in technology and culture."
  },
  "South Sudan": {
      funFact: "South Sudan is known for its diverse ethnic groups, Nile River landscapes, and challenges in nation-building after gaining independence.",
      historicalFact: "South Sudan gained independence from Sudan in 2011 after decades of civil war but has faced internal conflicts and humanitarian challenges."
  },
  "Spain": {
      funFact: "Spain is known for its Mediterranean beaches, historic cities (like Barcelona and Madrid), Flamenco music, and diverse regional cultures.",
      historicalFact: "Spain has a history of ancient Iberian tribes, Roman conquest, Moorish rule, Christian Reconquista, colonial empire, and modern constitutional monarchy."
  },
  "Sri Lanka": {
      funFact: "Sri Lanka is known for its ancient cities (like Anuradhapura and Sigiriya), tea plantations, and diverse wildlife (including elephants and leopards).",
      historicalFact: "Sri Lanka has a history of ancient Sinhalese kingdoms, Indian influence, European colonization by the Portuguese, Dutch, and British, and independence struggles leading to self-rule in 1948."
  },
  "Sudan": {
      funFact: "Sudan is known for its Nile River landscapes, ancient pyramids (like Meroë), and diverse ethnic groups.",
      historicalFact: "Sudan has a history of ancient civilizations like Kush and Nubia, Egyptian and Roman influences, Islamic kingdoms, British colonization, and gaining independence in 1956."
  },
  "Suriname": {
      funFact: "Suriname is known for its diverse rainforests, Dutch colonial architecture, and cultural blend of Caribbean, South Asian, and indigenous influences.",
      historicalFact: "Suriname has a history of indigenous cultures, Dutch colonization, African slavery, and gaining independence in 1975, becoming a culturally rich and biodiverse nation."
  },
  "Sweden": {
      funFact: "Sweden is known for its innovation (including Spotify and IKEA), Viking heritage, and natural beauty (like the Northern Lights).",
      historicalFact: "Sweden has a history dating back to Viking and medieval times, followed by union with Denmark and Norway, Swedish Empire, and modern neutrality and welfare state."
  },
  "Switzerland": {
      funFact: "Switzerland is known for its Alps (for skiing and hiking), Swiss watches, chocolate, and political neutrality.",
      historicalFact: "Switzerland has a history of Swiss Confederacy, neutrality during wars, Reformation, and modern direct democracy and economic stability."
  },
  "Syria": {
      funFact: "Syria is known for its ancient cities (like Damascus and Aleppo), rich cultural heritage, and Mediterranean cuisine.",
      historicalFact: "Syria has a history dating back to ancient civilizations, Roman and Byzantine rule, Islamic caliphates, Ottoman Empire, French mandate, and modern challenges such as civil war."
  },
  "Taiwan": {
      funFact: "Taiwan is known for its bustling night markets, scenic Taroko Gorge, high-tech industry, and vibrant temples.",
      historicalFact: "Taiwan has a history of indigenous tribes, Dutch and Spanish colonization attempts, Qing Dynasty rule, Japanese colonization, and becoming a democratic republic in the shadow of mainland China."
  },
  "Tajikistan": {
      funFact: "Tajikistan is known for its Pamir Mountains, Persian culture, and ancient Silk Road heritage.",
      historicalFact: "Tajikistan has a history of Persian empires, Silk Road trade, Soviet rule, and independence as a Central Asian nation."
  },
  "Tanzania": {
      funFact: "Tanzania is known for its wildlife (like Serengeti National Park), Mount Kilimanjaro, and diverse cultures (including Maasai and Swahili).",
      historicalFact: "Tanzania has a history of ancient trade routes, Arab and European explorers, German and British colonization, and merging of Tanganyika and Zanzibar to form Tanzania in 1964."
  },
  "Thailand": {
      funFact: "Thailand is known for its ornate temples (like Wat Phra Kaew), tropical beaches, vibrant street food, and traditional Muay Thai boxing.",
      historicalFact: "Thailand has a history of ancient kingdoms like Ayutthaya and Sukhothai, European colonization resistance, and modern constitutional monarchy."
  },
  "Timor-Leste": {
      funFact: "Timor-Leste is known for its scenic landscapes, diverse coral reefs, and traditional Timorese culture.",
      historicalFact: "Timor-Leste gained independence from Indonesia in 2002 after a period of Portuguese colonization and Indonesian rule, becoming one of the youngest nations."
  },
  "Togo": {
      funFact: "Togo is known for its palm-fringed beaches, traditional music (like Gbéga), and vibrant markets.",
      historicalFact: "Togo has a history of indigenous kingdoms, European colonization, and gaining independence as a sovereign nation in West Africa."
  },
  "Tokelau": {
      funFact: "Tokelau is known for its coral atolls, turquoise lagoons, and Polynesian culture.",
      historicalFact: "Tokelau is a dependent territory of New Zealand in the Pacific Ocean, known for its remote location and traditional way of life."
  },
  "Tonga": {
      funFact: "Tonga is known for its royal family, Polynesian cultural practices, and pristine coral reefs.",
      historicalFact: "Tonga has a history of ancient Polynesian kingdoms, European contact, British protectorate status, and becoming a constitutional monarchy in the South Pacific."
  },
  "Trinidad and Tobago": {
      funFact: "Trinidad and Tobago are known for their Carnival festival, vibrant steelpan music, and diverse cultural heritage.",
      historicalFact: "Trinidad and Tobago has a history of indigenous Amerindian peoples, Spanish and British colonization, and gaining independence as a republic in the Caribbean."
  },
  "Tunisia": {
      funFact: "Tunisia is known for its ancient ruins (like Carthage and El Djem), Sahara Desert landscapes, and vibrant souks (markets).",
      historicalFact: "Tunisia has a history of ancient civilizations, Phoenician and Roman rule, Islamic caliphates, Ottoman Empire, French colonization, and modern independence as a republic."
  },
  "Turkey": {
      funFact: "Turkey is known for its cultural heritage (like Hagia Sophia and Ephesus), cuisine (including kebabs and baklava), and diverse landscapes.",
      historicalFact: "Turkey has a history dating back to ancient Anatolian civilizations, followed by Greek, Roman, Byzantine, and Ottoman empires, and modernization as a republic."
  },
  "Turkmenistan": {
      funFact: "Turkmenistan is known for its ancient Silk Road cities (like Merv and Nisa), desert landscapes, and marble-clad modern architecture.",
      historicalFact: "Turkmenistan has a history of ancient civilizations, Silk Road trade, Russian Empire, Soviet rule, and independence as a Central Asian nation."
  },
  "Turks and Caicos Islands": {
      funFact: "The Turks and Caicos Islands are known for their white sandy beaches, turquoise waters, and coral reefs.",
      historicalFact: "The Turks and Caicos Islands are a British Overseas Territory in the Atlantic Ocean, known for tourism and marine biodiversity."
  },
  "Tuvalu": {
      funFact: "Tuvalu is known for its atolls, traditional Polynesian culture, and vulnerability to climate change.",
      historicalFact: "Tuvalu gained independence from the United Kingdom in 1978 and faces challenges such as rising sea levels threatening its low-lying islands."
  },
  "Uganda": {
      funFact: "Uganda is known for its mountain gorillas (found in Bwindi Impenetrable Forest), Lake Victoria, and vibrant cultural traditions.",
      historicalFact: "Uganda has a history of powerful African kingdoms, British colonization, and gaining independence in 1962, followed by periods of political instability and recovery."
  },
  "Ukraine": {
      funFact: "Ukraine is known for its Orthodox churches (like St. Sophia's Cathedral), Black Sea coastline, and traditional borscht soup.",
      historicalFact: "Ukraine has a history of Kievan Rus' origins, Mongol invasions, Cossack Hetmanate, Russian and Soviet rule, and modern independence as a sovereign nation."
  },
  "United Arab Emirates": {
      funFact: "The United Arab Emirates is known for its futuristic cities (like Dubai and Abu Dhabi), luxury shopping, and Arabian Desert landscapes.",
      historicalFact: "The United Arab Emirates has a history of Bedouin tribes, pearl diving, British protectorate status, and unification into a modern federation."
  },
  "United Kingdom": {
      funFact: "The United Kingdom is known for its historic landmarks (like Big Ben and Stonehenge), royal family, and cultural contributions (like The Beatles).",
      historicalFact: "The United Kingdom has a history of Celtic tribes, Roman occupation, Anglo-Saxon and Viking invasions, Norman conquest, British Empire, and modern parliamentary democracy."
  },
  "United States": {
      funFact: "The United States is known for its diverse landscapes (from Grand Canyon to New York City), cultural influences, and technological innovation.",
      historicalFact: "The United States has a history of Native American cultures, European colonization, independence from Britain in 1776, westward expansion, Civil War, and global superpower status."
  },
  "Uruguay": {
      funFact: "Uruguay is known for its pristine beaches (like Punta del Este), mate tea culture, and historic neighborhoods (like Ciudad Vieja in Montevideo).",
      historicalFact: "Uruguay has a history of indigenous Charrúa peoples, Spanish colonization, Portuguese influence, struggle for independence, and becoming a democratic republic."
  },
  "Uzbekistan": {
      funFact: "Uzbekistan is known for its Silk Road cities (like Samarkand and Bukhara), Islamic architecture, and diverse cultural heritage.",
      historicalFact: "Uzbekistan has a history of ancient civilizations, Silk Road trade, Persian and Russian rule, Soviet republic status, and independence as a Central Asian nation."
  },
  "Vanuatu": {
      funFact: "Vanuatu is known for its volcanic landscapes (like Mount Yasur), vibrant coral reefs, and diverse tribal cultures.",
      historicalFact: "Vanuatu has a history of indigenous Melanesian cultures, European exploration, joint French and British colonial rule, and gaining independence in 1980."
  },
  "Vatican City": {
      funFact: "Vatican City is known for being the smallest independent state in the world, home to St. Peter's Basilica and the Pope.",
      historicalFact: "Vatican City has a history as the spiritual center of the Roman Catholic Church, established as an independent state through the Lateran Treaty in 1929."
  },
  "Venezuela": {
      funFact: "Venezuela is known for its Angel Falls (the world's highest uninterrupted waterfall), Caribbean coastline, and vibrant Latin American culture.",
      historicalFact: "Venezuela has a history of indigenous cultures, Spanish colonization, independence led by Simón Bolívar, oil wealth, and modern economic and political challenges."
  },
  "Vietnam": {
      funFact: "Vietnam is known for its bustling cities (like Ho Chi Minh City), Halong Bay's natural beauty, pho noodle soup, and rich history.",
      historicalFact: "Vietnam has a history of ancient Dong Son culture, Chinese and French colonization, Vietnamese independence movements, Vietnam War, and modern reunification and economic reforms."
  },
  "Wallis and Futuna": {
      funFact: "Wallis and Futuna are known for their Polynesian culture, volcanic landscapes, and French overseas collectivity status.",
      historicalFact: "Wallis and Futuna are French overseas collectivities in the Pacific Ocean, known for their traditional culture and remote island life."
  },
  "Western Sahara": {
      funFact: "Western Sahara is known for its disputed territory status, Sahrawi culture, and scenic desert landscapes along the Atlantic coast.",
      historicalFact: "Western Sahara has a history of indigenous Sahrawi tribes, Spanish colonization, and ongoing dispute over sovereignty between Morocco and the Polisario Front."
  },
  "Yemen": {
      funFact: "Yemen is known for its ancient cities (like Sana'a), Arabian Peninsula landscapes, and UNESCO World Heritage sites.",
      historicalFact: "Yemen has a history of ancient civilizations, Islamic caliphates, Ottoman and British colonial rule, North-South division, and ongoing conflicts and humanitarian crises."
  },
  "Zambia": {
      funFact: "Zambia is known for its Victoria Falls, diverse wildlife (like in South Luangwa National Park), and vibrant traditional ceremonies.",
      historicalFact: "Zambia has a history of indigenous kingdoms, British colonization as Northern Rhodesia, independence struggles, and peaceful transition to a democratic republic."
  },
  "Zimbabwe": {
      funFact: "Zimbabwe is known for its dramatic landscapes (like Matobo Hills and Great Zimbabwe), diverse wildlife, and vibrant arts scene.",
      historicalFact: "Zimbabwe has a history of ancient civilizations like Great Zimbabwe, British colonization as Southern Rhodesia, independence struggle, and modern challenges under Robert Mugabe's rule."
  }
};


// Add more countries here

const additionalInfo2 = {
      "Afghanistan": {
          "localCusine": ["Kabuli Pulao", "Mantu", "Ashak"]
      },
      "Albania": {
          "localCusine": ["Tavë Kosi", "Fërgesë", "Byrek"]
      },
      "Algeria": {
          "localCusine": ["Couscous", "Chakchouka", "Merguez"]
      },
      "Andorra": {
          "localCusine": ["Escudella", "Trinxat", "Cargols"]
      },
      "Angola": {
          "localCusine": ["Muamba de Galinha", "Calulu", "Funge"]
      },
      "Antigua and Barbuda": {
          "localCusine": ["Fungee and Pepperpot", "Ducana", "Saltfish"]
      },
      "Argentina": {
          "localCusine": ["Asado", "Empanadas", "Milanesa"]
      },
      "Armenia": {
          "localCusine": ["Khorovats", "Dolma", "Lavash"]
      },
      "Australia": {
          "localCusine": ["Meat Pie", "Vegemite on Toast", "Barramundi"]
      },
      "Austria": {
          "localCusine": ["Wiener Schnitzel", "Tafelspitz", "Apfelstrudel"]
      },
      "Azerbaijan": {
          "localCusine": ["Plov", "Dolma", "Kebab"]
      },
      "Bahamas": {
          "localCusine": ["Conch Salad", "Rock Lobsters", "Johnnycake"]
      },
      "Bahrain": {
          "localCusine": ["Machboos", "Harees", "Balaleet"]
      },
      "Bangladesh": {
          "localCusine": ["Biryani", "Hilsa Curry", "Panta Ilish"]
      },
      "Barbados": {
          "localCusine": ["Flying Fish and Cou-Cou", "Macaroni Pie", "Fish Cakes"]
      },
      "Belarus": {
          "localCusine": ["Draniki", "Machanka", "Kolduny"]
      },
      "Belgium": {
          "localCusine": ["Moules-Frites", "Stoofvlees", "Waterzooi"]
      },
      "Belize": {
          "localCusine": ["Rice and Beans", "Fry Jacks", "Hudut"]
      },
      "Benin": {
          "localCusine": ["Amiwo", "Kuli-Kuli", "Acarajé"]
      },
      "Bhutan": {
          "localCusine": ["Ema Datshi", "Jasha Maru", "Phaksha Paa"]
      },
      "Bolivia": {
          "localCusine": ["Salteñas", "Pique Macho", "Anticucho"]
      },
      "Bosnia and Herzegovina": {
          "localCusine": ["Ćevapi", "Burek", "Klepe"]
      },
      "Botswana": {
          "localCusine": ["Seswaa", "Morogo", "Vetkoek"]
      },
      "Brazil": {
          "localCusine": ["Feijoada", "Churrasco", "Acarajé"]
      },
      "Brunei": {
          "localCusine": ["Ambuyat", "Nasi Katok", "Hati Buyah"]
      },
      "Bulgaria": {
          "localCusine": ["Banitsa", "Shopska Salad", "Kebapche"]
      },
      "Burkina Faso": {
          "localCusine": ["Tô", "Riz Gras", "Poulet Bicyclette"]
      },
      "Burundi": {
          "localCusine": ["Boko Boko Harees", "Brochettes", "Ibiharage"]
      },
      "Cabo Verde": {
          "localCusine": ["Cachupa", "Pastel", "Buzio"]
      },
      "Cambodia": {
          "localCusine": ["Amok", "Samlar Machu", "Bai Sach Chrouk"]
      },
      "Cameroon": {
          "localCusine": ["Ndolé", "Achu Soup", "Ekwang"]
      },
      "Canada": {
          "localCusine": ["Poutine", "Butter Tarts", "Nanaimo Bars"]
      },
      "Central African Republic": {
          "localCusine": ["Cassava Leaves", "Gozo", "Kanda"]
      },
      "Chad": {
          "localCusine": ["Daraba", "Kisra", "Mara"]
      },
      "Chile": {
          "localCusine": ["Empanadas", "Curanto", "Pastel de Choclo"]
      },
      "China": {
          "localCusine": ["Peking Duck", "Kung Pao Chicken", "Mapo Tofu"]
      },
      "Colombia": {
          "localCusine": ["Arepas", "Bandeja Paisa", "Ajiaco"]
      },
      "Comoros": {
          "localCusine": ["Langouste à la Vanille", "Mkatra Foutra", "Pilaou"]
      },
      "Congo (Congo-Brazzaville)": {
          "localCusine": ["Saka-Saka", "Moambe Chicken", "Fufu"]
      },
      "Costa Rica": {
          "localCusine": ["Gallo Pinto", "Casado", "Arroz con Pollo"]
      },
      "Croatia": {
          "localCusine": ["Peka", "Black Risotto", "Ćevapi"]
      },
      "Cuba": {
          "localCusine": ["Ropa Vieja", "Arroz con Pollo", "Tostones"]
      },
      "Cyprus": {
          "localCusine": ["Halloumi", "Souvla", "Sheftalia"]
      },
      "Czechia (Czech Republic)": {
          "localCusine": ["Svíčková", "Guláš", "Trdelník"]
      },
      "Democratic Republic of the Congo": {
          "localCusine": ["Moambe Chicken", "Fufu", "Pondu"]
      },
      "Denmark": {
          "localCusine": ["Smørrebrød", "Frikadeller", "Æbleskiver"]
      },
      "Djibouti": {
          "localCusine": ["Skoudehkaris", "Lahoh", "Fah-Fah"]
      },
      "Dominica": {
          "localCusine": ["Callaloo Soup", "Mountain Chicken", "Souse"]
      },
      "Dominican Republic": {
          "localCusine": ["La Bandera", "Mangu", "Sancocho"]
      },
      "Ecuador": {
          "localCusine": ["Ceviche", "Llapingachos", "Encebollado"]
      },
      "Egypt": {
          "localCusine": ["Koshari", "Ful Medames", "Molokhia"]
      },
      "El Salvador": {
          "localCusine": ["Pupusas", "Yuca Frita", "Sopa de Pata"]
      },
      "Equatorial Guinea": {
          "localCusine": ["Pepe Soup", "Sukupira", "Sopa de Pescado"]
      },
      "Eritrea": {
          "localCusine": ["Zigni", "Injera", "Ful"]
      },
      "Estonia": {
          "localCusine": ["Verivorst", "Sült", "Kohuke"]
      },
      "Eswatini": {
          "localCusine": ["Sishwala", "Emahewu", "Sidvudvu"]
      },
      "Ethiopia": {
          "localCusine": ["Doro Wat", "Injera", "Tibs"]
      },
      "Fiji": {
          "localCusine": ["Kokoda", "Lovo", "Palusami"]
      },
      "Finland": {
          "localCusine": ["Karjalanpiirakka", "Ruisleipä", "Kalakukko"]
      },
      "France": {
          "localCusine": ["Croissant", "Coq au Vin", "Bouillabaisse"]
      },
      "Gabon": {
          "localCusine": ["Poulet Nyembwe", "Atanga", "Dongo-Dongo"]
      },
      "Gambia": {
          "localCusine": ["Domoda", "Benachin", "Yassa"]
      },
      "Georgia": {
          "localCusine": ["Khachapuri", "Khinkali", "Pkhali"]
      },
      "Germany": {
          "localCusine": ["Bratwurst", "Sauerbraten", "Pretzel"]
      },
      "Ghana": {
          "localCusine": ["Jollof Rice", "Fufu", "Banku"]
      },
      "Greece": {
          "localCusine": ["Moussaka", "Souvlaki", "Baklava"]
      },
      "Grenada": {
          "localCusine": ["Oil Down", "Callaloo Soup", "Pelau"]
      },
      "Guatemala": {
          "localCusine": ["Pepian", "Kak'ik", "Fiambre"]
      },
      "Guinea": {
          "localCusine": ["Poulet Yassa", "Fufu", "Jollof Rice"]
      },
      "Guinea-Bissau": {
          "localCusine": ["Caldo", "Jollof Rice", "Chakery"]
      },
      "Guyana": {
          "localCusine": ["Pepperpot", "Cook-Up Rice", "Metemgee"]
      },
      "Haiti": {
          "localCusine": ["Griot", "Joumou Soup", "Tassot"]
      },
      "Honduras": {
          "localCusine": ["Baleadas", "Sopa de Caracol", "Plato Típico"]
      },
      "Hungary": {
          "localCusine": ["Goulash", "Lángos", "Chicken Paprikash"]
      },
      "Iceland": {
          "localCusine": ["Hákarl", "Skyr", "Pylsur"]
      },
      "India": {
          "localCusine": ["Biryani", "Butter Chicken", "Masala Dosa"]
      },
      "Indonesia": {
          "localCusine": ["Nasi Goreng", "Satay", "Rendang"]
      },
      "Iran": {
          "localCusine": ["Chelo Kebab", "Ghormeh Sabzi", "Fesenjan"]
      },
      "Iraq": {
          "localCusine": ["Masgouf", "Quzi", "Kleicha"]
      },
      "Ireland": {
          "localCusine": ["Irish Stew", "Boxty", "Colcannon"]
      },
      "Israel": {
          "localCusine": ["Falafel", "Hummus", "Shakshuka"]
      },
      "Italy": {
          "localCusine": ["Pizza", "Pasta", "Tiramisu"]
      },
      "Jamaica": {
          "localCusine": ["Jerk Chicken", "Ackee and Saltfish", "Curried Goat"]
      },
      "Japan": {
          "localCusine": ["Sushi", "Ramen", "Tempura"]
      },
      "Jordan": {
          "localCusine": ["Mansaf", "Falafel", "Knafeh"]
      },
      "Kazakhstan": {
          "localCusine": ["Beshbarmak", "Kazy", "Shubat"]
      },
      "Kenya": {
          "localCusine": ["Nyama Choma", "Ugali", "Sukuma Wiki"]
      },
      "Kiribati": {
          "localCusine": ["Te Bua Toro Ni Baukin", "Palusami", "Coconut Crab"]
      },
      "Kuwait": {
          "localCusine": ["Machboos", "Jireesh", "Margoog"]
      },
      "Kyrgyzstan": {
          "localCusine": ["Beshbarmak", "Lagman", "Kuurdak"]
      },
      "Laos": {
          "localCusine": ["Laap", "Tam Mak Hoong", "Khao Piak Sen"]
      },
      "Latvia": {
          "localCusine": ["Rye Bread", "Grey Peas and Bacon", "Speķa Pīrāgi"]
      },
      "Lebanon": {
          "localCusine": ["Tabbouleh", "Kibbeh", "Fattoush"]
      },
      "Lesotho": {
          "localCusine": ["Papa", "Nyekoe", "Motoho"]
      },
      "Liberia": {
          "localCusine": ["Jollof Rice", "Palm Butter Soup", "Fufu"]
      },
      "Libya": {
          "localCusine": ["Couscous", "Shorba", "Bazeen"]
      },
      "Liechtenstein": {
          "localCusine": ["Käsknöpfle", "Ribel", "Tüarka-Rebel"]
      },
      "Lithuania": {
          "localCusine": ["Cepelinai", "Kugelis", "Šaltibarščiai"]
      },
      "Luxembourg": {
          "localCusine": ["Judd mat Gaardebounen", "Gromperekichelcher", "Bouneschlupp"]
      },
      "Madagascar": {
          "localCusine": ["Romazava", "Ravitoto", "Koba"]
      },
      "Malawi": {
          "localCusine": ["Nsima", "Chambo", "Mkhwani"]
      },
      "Malaysia": {
          "localCusine": ["Nasi Lemak", "Char Kway Teow", "Laksa"]
      },
      "Maldives": {
          "localCusine": ["Mas Huni", "Garudhiya", "Fihunu Mas"]
      },
      "Mali": {
          "localCusine": ["Tiguadege Na", "Mafe", "Poulet Yassa"]
      },
      "Malta": {
          "localCusine": ["Rabbit Stew", "Pastizzi", "Ftira"]
      },
      "Marshall Islands": {
          "localCusine": ["Baked Breadfruit", "Taro", "Pandanus"]
      },
      "Mauritania": {
          "localCusine": ["Thieboudienne", "Méchoui", "Cherchem"]
      },
      "Mauritius": {
          "localCusine": ["Dholl Puri", "Bol Renversé", "Gateau Piment"]
      },
      "Mexico": {
          "localCusine": ["Tacos", "Mole", "Enchiladas"]
      },
      "Micronesia": {
          "localCusine": ["Taro", "Pandanus", "Coconut"]
      },
      "Moldova": {
          "localCusine": ["Mămăligă", "Placinte", "Zeama"]
      },
      "Monaco": {
          "localCusine": ["Barbajuan", "Socca", "Fougasse"]
      },
      "Mongolia": {
          "localCusine": ["Buuz", "Khuushuur", "Bansh"]
      },
      "Montenegro": {
          "localCusine": ["Cevapi", "Njeguski Steak", "Kacamak"]
      },
      "Morocco": {
          "localCusine": ["Tagine", "Couscous", "Harira"]
      },
      "Mozambique": {
          "localCusine": ["Piri Piri Chicken", "Matapa", "Feijoada"]
      },
      "Myanmar (formerly Burma)": {
          "localCusine": ["Mohinga", "Laphet Thoke", "Shan Noodles"]
      },
      "Namibia": {
          "localCusine": ["Kapana", "Biltong", "Potjiekos"]
      },
      "Nauru": {
          "localCusine": ["Coconut Fish", "Frigate", "Breadfruit"]
      },
      "Nepal": {
          "localCusine": ["Dal Bhat", "Momo", "Sel Roti"]
      },
      "Netherlands": {
          "localCusine": ["Stroopwafel", "Haring", "Poffertjes"]
      },
      "New Zealand": {
          "localCusine": ["Hangi", "Pavlova", "Lamb"]
      },
      "Nicaragua": {
          "localCusine": ["Gallo Pinto", "Nacatamal", "Vigorón"]
      },
      "Niger": {
          "localCusine": ["Jollof Rice", "Djerma Stew", "Fufu"]
      },
      "Nigeria": {
          "localCusine": ["Jollof Rice", "Pounded Yam", "Egusi Soup"]
      },
      "North Korea": {
          "localCusine": ["Naengmyeon", "Kimchi", "Bibimbap"]
      },
      "North Macedonia": {
          "localCusine": ["Tavče Gravče", "Ajvar", "Kebapi"]
      },
      "Norway": {
          "localCusine": ["Rakfisk", "Lutefisk", "Kjøttkaker"]
      },
      "Oman": {
          "localCusine": ["Shuwa", "Majboos", "Mashuai"]
      },
      "Pakistan": {
          "localCusine": ["Biryani", "Karahi", "Haleem"]
      },
      "Palau": {
          "localCusine": ["Fruit Bat Soup", "Taro", "Cassava"]
      },
      "Palestine State": {
          "localCusine": ["Musakhan", "Maqluba", "Knafeh"]
      },
      "Panama": {
          "localCusine": ["Sancocho", "Ceviche", "Tamales"]
      },
      "Papua New Guinea": {
          "localCusine": ["Mumu", "Kaukau", "Kokoda"]
      },
      "Paraguay": {
          "localCusine": ["Sopa Paraguaya", "Chipa", "Mbeju"]
      },
      "Peru": {
          "localCusine": ["Ceviche", "Lomo Saltado", "Aji de Gallina"]
      },
      "Philippines": {
          "localCusine": ["Adobo", "Sinigang", "Lechon"]
      },
      "Poland": {
          "localCusine": ["Pierogi", "Bigos", "Żurek"]
      },
      "Portugal": {
          "localCusine": ["Bacalhau", "Pastéis de Nata", "Caldo Verde"]
      },
      "Qatar": {
          "localCusine": ["Machboos", "Harees", "Luqaimat"]
      },
      "Romania": {
          "localCusine": ["Sarmale", "Mici", "Ciorbă de burtă"]
      },
      "Russia": {
          "localCusine": ["Borscht", "Pelmeni", "Blini"]
      },
      "Rwanda": {
          "localCusine": ["Ugali", "Isombe", "Brochettes"]
      },
      "Saint Kitts and Nevis": {
          "localCusine": ["Goat Water", "Saltfish", "Johnny Cakes"]
      },
      "Saint Lucia": {
          "localCusine": ["Green Fig and Saltfish", "Callaloo Soup", "Bouyon"]
      },
      "Saint Vincent and the Grenadines": {
          "localCusine": ["Roasted Breadfruit", "Fried Jackfish", "Pepperpot"]
      },
      "Samoa": {
          "localCusine": ["Palusami", "Oka I'a", "Sapasu"]
      },
      "San Marino": {
          "localCusine": ["Torta Tre Monti", "Nidi di Rondine", "Bustrengo"]
      },
      "Sao Tome and Principe": {
          "localCusine": ["Calulu", "Moqueca", "Xima"]
      },
      "Saudi Arabia": {
          "localCusine": ["Kabsa", "Mandi", "Shawarma"]
      },
      "Senegal": {
          "localCusine": ["Thieboudienne", "Yassa", "Mafe"]
      },
      "Serbia": {
          "localCusine": ["Ćevapi", "Sarma", "Pljeskavica"]
      },
      "Seychelles": {
          "localCusine": ["Grilled Fish", "Octopus Curry", "Bat Curry"]
      },
      "Sierra Leone": {
          "localCusine": ["Cassava Leaves", "Groundnut Stew", "Fufu"]
      },
      "Singapore": {
          "localCusine": ["Hainanese Chicken Rice", "Laksa", "Chilli Crab"]
      },
      "Slovakia": {
          "localCusine": ["Bryndzové Halušky", "Kapustnica", "Zemiakové Placky"]
      },
      "Slovenia": {
          "localCusine": ["Potica", "Prekmurska Gibanica", "Kranjska Klobasa"]
      },
      "Solomon Islands": {
          "localCusine": ["Poi", "Ulu", "Palusami"]
      },
      "Somalia": {
          "localCusine": ["Somali Rice", "Sambusa", "Canjeero"]
      },
      "South Africa": {
          "localCusine": ["Bobotie", "Biltong", "Bunny Chow"]
      },
      "South Korea": {
          "localCusine": ["Kimchi", "Bulgogi", "Bibimbap"]
      },
      "South Sudan": {
          "localCusine": ["Ful Medames", "Kisra", "Asida"]
      },
      "Spain": {
          "localCusine": ["Paella", "Tapas", "Gazpacho"]
      },
      "Sri Lanka": {
          "localCusine": ["Rice and Curry", "Hoppers", "Kottu"]
      },
      "Sudan": {
          "localCusine": ["Ful Medames", "Kisra", "Asida"]
      },
      "Suriname": {
          "localCusine": ["Pom", "Roti", "Saoto Soup"]
      },
      "Sweden": {
          "localCusine": ["Meatballs", "Gravlax", "Smörgåstårta"]
      },
      "Switzerland": {
          "localCusine": ["Fondue", "Rösti", "Raclette"]
      },
      "Syria": {
          "localCusine": ["Kibbeh", "Yabrak", "Shanklish"]
      },
      "Taiwan": {
          "localCusine": ["Beef Noodle Soup", "Xiao Long Bao", "Braised Pork Rice"]
      },
      "Tajikistan": {
          "localCusine": ["Plov", "Laghman", "Sambusa"]
      },
      "Tanzania": {
          "localCusine": ["Ugali", "Nyama Choma", "Zanzibari Pilau"]
      },
      "Thailand": {
          "localCusine": ["Pad Thai", "Tom Yum Goong", "Green Curry"]
      },
      "Timor-Leste": {
          "localCusine": ["Ikan Pepes", "Budu", "Tapai"]
      },
      "Togo": {
          "localCusine": ["Fufu", "Akpan", "Gboma Dessi"]
      },
      "Tonga": {
          "localCusine": ["Lū Sipi", "Ota Ika", "Kapisi Pulu"]
      },
      "Trinidad and Tobago": {
          "localCusine": ["Doubles", "Callaloo", "Bake and Shark"]
      },
      "Tunisia": {
          "localCusine": ["Couscous", "Brik", "Harissa"]
      },
      "Turkey": {
          "localCusine": ["Kebabs", "Mezes", "Baklava"]
      },
      "Turkmenistan": {
          "localCusine": ["Plov", "Manty", "Chorek"]
      },
      "Tuvalu": {
          "localCusine": ["Pulaka", "Fafaru", "Palusami"]
      },
      "Uganda": {
          "localCusine": ["Matoke", "Luwombo", "Rolex"]
      },
      "Ukraine": {
          "localCusine": ["Borscht", "Varenyky", "Holubtsi"]
      },
      "United Arab Emirates": {
          "localCusine": ["Shawarma", "Machboos", "Harees"]
      },
      "United Kingdom": {
          "localCusine": ["Fish and Chips", "Roast Beef", "Shepherd's Pie"]
      },
      "United States of America": {
          "localCusine": ["Burgers", "Hot Dogs", "Apple Pie"]
      },
      "Uruguay": {
          "localCusine": ["Chivito", "Asado", "Empanadas"]
      },
      "Uzbekistan": {
          "localCusine": ["Plov", "Shashlik", "Manti"]
      },
      "Vanuatu": {
          "localCusine": ["Lap Lap", "Tuluk", "Coconut Crab"]
      },
      "Vatican City": {
          "localCusine": ["Risotto alla Pilota", "Bistecca alla Fiorentina", "Trippa alla Romana"]
      },
      "Venezuela": {
          "localCusine": ["Arepas", "Pabellón Criollo", "Cachapas"]
      },
      "Vietnam": {
          "localCusine": ["Pho", "Banh Mi", "Goi Cuon"]
      },
      "Yemen": {
          "localCusine": ["Mandi", "Saltah", "Bint Al-Sahn"]
      },
      "Zambia": {
          "localCusine": ["Nshima", "Chikanda", "Ifisashi"]
      },
      "Zimbabwe": {
          "localCusine": ["Sadza", "Mopane Worms", "Nyama"]
      }
  };
let countriesData = [];

function fetchCountries() {
  fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
          countriesData = data;
          displayCountries(data);
      })
      .catch(error => console.error('Error:', error));
}

function displayCountries(countries) {
  const countryList = document.getElementById('countryList');
  countryList.innerHTML = '';

  if (countries.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'col-12';
      noResults.innerHTML = '<p>No countries found.</p>';
      countryList.appendChild(noResults);
      return;
  }

  countries.forEach(country => {
      const countryCard = document.createElement('div');
      countryCard.className = 'col-md-3 country-card animate__animated animate__fadeInUp';

      const countryName = country.name.common;
      const currency = country.currencies ? Object.values(country.currencies)[0].name : 'Unknown';
      const languages = country.languages ? Object.values(country.languages).join(', ') : 'Unknown';
      const additionalInfo = additionalCountryInfo[countryName] || { funFact: 'No fun fact available.', historicalFact: 'No historical fact available.' };
        const localCusine = additionalInfo2[countryName] ? additionalInfo2[countryName].localCusine.join(', ') : 'No local cuisine available.';

      countryCard.innerHTML = `
          <h5>${countryName}</h5>
          <img src="${country.flags.png}" alt="Flag of ${countryName}" class="img-fluid">
          <p>Capital: ${country.capital}</p>
          <p>Region: ${country.region}</p>
          <p>Population: ${country.population}</p>
          <p>Currency: ${currency}</p>
          <p>Languages: ${languages}</p>
          <p>Local Cuisine: ${localCusine}</p>
            <p>Fun Fact: ${additionalInfo.funFact}</p>
               <p>Historical Fact: ${additionalInfo.historicalFact}</p>
          <button class="btn btn-primary" onclick="downloadFlag('${country.flags.png}', '${countryName}')">Download Flag</button>
      `;

      countryList.appendChild(countryCard);
  });
}

function searchCountry() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredCountries = countriesData.filter(country => {
      const countryName = country.name.common;
      
      // Check country name
      if (countryName.toLowerCase().includes(searchInput)) {
          return true;
      }
      
      // Check capital
      if (country.capital && country.capital[0].toLowerCase().includes(searchInput)) {
          return true;
      }
      
      // Check region
      if (country.region.toLowerCase().includes(searchInput)) {
          return true;
      }
      
      // Check population
      if (country.population.toString().includes(searchInput)) {
          return true;
      }
      
      // Check currency
      if (country.currencies) {
          const currencies = Object.values(country.currencies);
          if (currencies.some(curr => curr.name.toLowerCase().includes(searchInput))) {
              return true;
          }
      }
      
      // Check languages
      if (country.languages) {
          const languages = Object.values(country.languages);
          if (languages.some(lang => lang.toLowerCase().includes(searchInput))) {
              return true;
          }
      }
      
      // Check additionalCountryInfo
      const additionalInfo = additionalCountryInfo[countryName];
      if (additionalInfo) {
          if (additionalInfo.funFact.toLowerCase().includes(searchInput) ||
              additionalInfo.historicalFact.toLowerCase().includes(searchInput)) {
              return true;
          }
      }
      
      // Check additionalInfo2 for Local Cuisine
      const cuisineInfo = additionalInfo2[countryName];
      if (cuisineInfo && cuisineInfo.localCusine) {
          if (cuisineInfo.localCusine.some(cuisine => cuisine.toLowerCase().includes(searchInput))) {
              return true;
          }
      }
      
      return false;
  });

  displayCountries(filteredCountries);
}


function downloadFlag(url, countryName) {
  const a = document.createElement('a');
  a.href = url;
  a.download = `${countryName}-flag.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.getElementById('searchInput').addEventListener('input', searchCountry);

document.getElementById('filterRegion').addEventListener('change', filterCountries);
document.getElementById('sortOption').addEventListener('change', sortCountries);

function filterCountries() {
  const selectedRegion = document.getElementById('filterRegion').value;
  const filteredCountries = selectedRegion ? countriesData.filter(country => country.region === selectedRegion) : countriesData;
  displayCountries(filteredCountries);
}

function sortCountries() {
  const sortOption = document.getElementById('sortOption').value;
  let sortedCountries = [...countriesData];

  switch (sortOption) {
      case 'population':
          sortedCountries.sort((a, b) => a.population - b.population);
          break;
      case 'region':
          sortedCountries.sort((a, b) => a.region.localeCompare(b.region));
          break;
      case 'language':
          sortedCountries.sort((a, b) => {
              const aLanguages = a.languages ? Object.values(a.languages).join(', ') : '';
              const bLanguages = b.languages ? Object.values(b.languages).join(', ') : '';
              return aLanguages.localeCompare(bLanguages);
          });
          break;
      case 'currency':
          sortedCountries.sort((a, b) => {
              const aCurrency = a.currencies ? Object.values(a.currencies)[0].name : '';
              const bCurrency = b.currencies ? Object.values(b.currencies)[0].name : '';
              return aCurrency.localeCompare(bCurrency);
          });
          break;
      default:
          break;
  }
  displayCountries(sortedCountries);
}
const resources = {
  en: {
      translation: {
          "World Countries Information": "World Countries Information",
          "Search for a country...": "Search for a country...",
          "Filter by Region": "Filter by Region",
          "Filter by Language": "Filter by Language",
          "Filter by Currency": "Filter by Currency",
          "Sort by": "Sort by",
          "Population": "Population",
          "Region": "Region",
          "Language": "Language",
          "Currency": "Currency",
          "Take Quiz": "Take Quiz"
      }
  },
  fr: {
      translation: {
          "World Countries Information": "Informations sur les pays du monde",
          "Search for a country...": "Recherchez un pays...",
          "Filter by Region": "Filtrer par région",
          "Filter by Language": "Filtrer par langue",
          "Filter by Currency": "Filtrer par devise",
          "Sort by": "Trier par",
          "Population": "Population",
          "Region": "Région",
          "Language": "Langue",
          "Currency": "Devise",
          "Take Quiz": "Passer le quiz"
      }
  }
};

i18next.init({
  lng: 'en', // default language
  debug: true,
  resources
}, function(err, t) {
  updateContent();
});

function updateContent() {
  document.querySelector('h1').textContent = i18next.t('World Countries Information');
  document.getElementById('searchInput').placeholder = i18next.t('Search for a country...');
  // Update other elements as needed
}

document.getElementById('languageSwitcher').addEventListener('change', function() {
  const selectedLang = this.value;
  i18next.changeLanguage(selectedLang, () => {
      updateContent();
  });
});
