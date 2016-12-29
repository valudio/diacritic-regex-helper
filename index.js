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
  'ZzŹźẐẑƵƶŽžŻżẒẓ'
];

function escapeRegExp(string) {
  return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
}

var diacritic = function(text) {
  if (!text) return '';
  var result = escapeRegExp(text);
  for (var i = 0; i < chars.length; i++) {
    result = result.replace(new RegExp('[' + chars[i] + ']', 'gi'), '[' + chars[i] + ']');
  }
  return result;
};

module.exports = diacritic;