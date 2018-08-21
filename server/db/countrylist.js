const countries = [
  'canada', 'united states', 'united states of america', 'usa', 'mexico', 'guatemala', 'belize', 'el salvador', 'honduras', 'nicaragua', 'costa rica', 'panama', 'bahamas', 'the bahamas', 'antigua and barbuda', 'barbados', 'dominica', 'trinidad and tobago', 'grenada', 'cuba', 'jamaica', 'haiti', 'dominican republic', 'st lucia', 'st. lucia', 'saint lucia', 'st kitts and nevis', 'st. kitts and nevis', 'saint kitts and nevis', 'st vincent and the grenadines', 'st. vincent and the grenadines', 'saint vincent and the grenadines',
  'colombia', 'ecuador', 'peru', 'chile', 'argentina', 'uruguay', 'paraguay', 'bolivia', 'brazil', 'suriname', 'guyana', 'venezuela',
  'cape verde', 'cabo verde', 'sao tome and principe', 'comoros', 'mauritius', 'seychelles', 'madagascar', 'swaziland', 'lesotho', 'south africa', 'namibia', 'botswana', 'zimbabwe', 'zambia', 'malawi', 'mozambique', 'tanzania', 'angola', 'rwanda', 'burundi', 'kenya', 'ethiopia', 'somalia', 'uganda', 'eritrea', 'djibouti', 'south sudan', 'sudan', 'chad', 'central african republic', 'car', 'democratic republic of congo', 'republic of congo', 'congo', 'gabon', 'equatorial guinea', 'cameroon', 'nigeria', 'niger', 'benin', 'togo', 'ghana', 'liberia', 'sierra leone', 'ivory coast', 'cote d\'ivoire', 'burkina faso', 'guinea-bissau', 'guinea', 'gambia', 'the gambia', 'senegal', 'morocco', 'mali', 'mauritania', 'algeria', 'tunisia', 'libya', 'egypt',
  'iceland', 'ireland', 'republic of ireland', 'united kingdom', 'uk', 'portugal', 'spain', 'andorra', 'france', 'monaco', 'luxembourg', 'belgium', 'netherlands', 'denmark', 'norway', 'sweden', 'finland', 'germany', 'poland', 'switzerland', 'liechtenstein', 'italy', 'san marino', 'vatican city', 'vatican', 'malta', 'austria', 'hungary', 'czech republic', 'czechia', 'slovakia', 'slovenia', 'croatia', 'bosnia and herzegovina', 'montenegro', 'serbia', 'kosovo', 'albania', 'macedonia', 'former yugoslav republic of macedonia', 'republic of macedonia', 'greece', 'bulgaria', 'romania', 'moldova', 'ukraine', 'belarus', 'estonia', 'latvia', 'lithuania', 
  'cyprus', 'turkey', 'russia', 
  'georgia', 'azerbaijan', 'armenia', 'syria', 'lebanon', 'jordan', 'israel', 'jordan', 'palestine', 'iraq', 'saudi arabia', 'yemen', 'oman', 'united arab emirates', 'uae', 'qatar', 'bahrain', 'kuwait', 'iran', 'afghanistan', 
  'turkmenistan', 'uzbekistan', 'tajikistan', 'kyrgyzstan', 'kazakhstan', 'mongolia', 'china', 'north korea', 'democratic people\'s republic of korea', 'south korea', 'republic of korea', 'japan', 'taiwan', 'pakistan', 'india', 'sri lanka', 'maldives', 'maldive islands', 'nepal', 'myanmar', 'burma', 'union of myanmar', 'bhutan', 'bangladesh', 'thailand', 'laos', 'cambodia', 'vietnam', 'philippines', 'the philippines', 'malaysia', 'singapore', 'indonesia', 'brunei', 'brunei darussalam', 'east timor', 'timor leste',
  'australia', 'new zealand', 'papua new guinea', 'palau', 'belau', 'nauru', 'samoa', 'tonga', 'friendly islands','kiribati', 'marshall islands', 'the marshalls', 'solomon islands', 'the solomons', 'federated states of micronesia', 'micronesia', 'fiji', 'vanuatu', 'tuvalu'
]
/*
Figure out how not to add additional points for duplicates. 
  united states, united states of america, usa
  bahamas, the bahamas
  st lucia, st. lucia, saint lucia
  st kitts and nevis, st. kitts and nevis, saint kitts and nevis
  st vincent and the grenadines, st. vincent and the grenadines, saint vincent and the grenadines
  
  cape verde, cabo verde
  central african republic, car
  republic of congo, congo
  ivory coast, cote d'ivoire
  gambia, the gambia
  
  ireland, republic of ireland
  uinted kingdom, uk
  vatican city, vatican
  czech republic, czechia
  macedonia, former yugoslav republic of macedonia, republic of macedonia
  united arab emirates, uae
  
  north korea, democratic people's republic of korea
  south korea, republic of korea
  maldives, maldive islands
  myanmar, burma, union of myanmar
  philippines, the philippines
  brunei, brunei darussalam
  east timor, timor leste
  
  palau, belau
  federated states of micronesia, micronesia
  tonga, friendly islands
  marshall islands, the marshalls
  solomon islands, the solomons
*/

module.exports = countries;