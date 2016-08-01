var chars = [
  'AaÁáÀàÂâÄäAĄąȺⱥǍǎȦȧẠạĀāÃãå',
  'CcĆćĈĉÇçȻȼČčĊċ',
  'EeÉéÈèÊêËëȨȩĘęɆɇĚěĖėẸẹĒēẼẽ',
  'IiÍíÌìÎîÏïĮįƗɨǏǐİiỊịĪīĨĩ',
  'JjĴĵɈɉǰ',
  'LlĹĺĻļŁłȽƚĽľḶḷ',
  'NnŃńǸǹŅņꞤꞥŇňṅṆṇÑñ',
  'OoÓóÒòÔôÖöǪǫØøƟɵǑǒȮȯỌọŌōÕõ',
  'SsŚśŜŝŞşꞨꞩŠšṠṡṢṣ',
  'TtẗŢţȾⱦŦŧŤťṪṫṬṭ',
  'UuÚúÙùÛûÜüŲųɄʉǓǔỤụŪūŨũ',
  'YyÝýỲỳŶŷŸÿɎɏẎẏỴỵȲȳỸỹ',
  'ZzŹźẐẑƵƶŽžŻżẒẓ',
];

var diacritic = function(text){
  if(!text) return '';
  var result = text;
  for (var char in chars) { // eslint-disable-line
    result = result.replace(new RegExp('[' + chars[char] + ']', 'gi'), '[' + chars[char] + ']');
  }
  return result;
};

module.exports = diacritic;