'use strict';

const data = [
  {
    "id": 1001,
    "title": "What the government doesn''t want you to know about cats",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": 1002,
    "title": "The most boring article about cats you''ll ever read",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus pulvinar elementum integer enim neque volutpat. Cursus mattis molestie a iaculis at. Sed viverra ipsum nunc aliquet. Interdum velit euismod in pellentesque massa placerat duis. Nulla at volutpat diam ut venenatis tellus. Iaculis urna id volutpat lacus laoreet. Neque ornare aenean euismod elementum nisi quis eleifend quam. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Placerat orci nulla pellentesque dignissim. Ut placerat orci nulla pellentesque dignissim enim sit. In metus vulputate eu scelerisque felis imperdiet. Mi ipsum faucibus vitae aliquet nec ullamcorper. Odio eu feugiat pretium nibh. Consectetur adipiscing elit pellentesque habitant morbi. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere."
  },
  {
    "id": 1003,
    "title": "7 things lady gaga has in common with cats",
    "content": "Lectus magna fringilla urna porttitor rhoncus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Enim ut sem viverra aliquet eget. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Ultricies mi eget mauris pharetra et ultrices. Maecenas volutpat blandit aliquam etiam. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Ut consequat semper viverra nam. Malesuada pellentesque elit eget gravida cum sociis natoque. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Interdum varius sit amet mattis vulputate enim nulla aliquet. Consequat mauris nunc congue nisi vitae. Metus vulputate eu scelerisque felis imperdiet. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Fermentum posuere urna nec tincidunt praesent semper. Amet venenatis urna cursus eget nunc scelerisque. Eros in cursus turpis massa tincidunt dui ut. Egestas pretium aenean pharetra magna ac placerat vestibulum."
  },
  {
    "id": 1004,
    "title": "The most incredible article about cats you''ll ever read",
    "content": "Odio euismod lacinia at quis risus. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Tempus quam pellentesque nec nam. Placerat in egestas erat imperdiet. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sed turpis tincidunt id aliquet risus feugiat in ante. Porta lorem mollis aliquam ut porttitor leo. Porta nibh venenatis cras sed. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Diam ut venenatis tellus in."
  },
  {
    "id": 1005,
    "title": "10 ways cats can help you live to 100",
    "content": "Viverra mauris in aliquam sem fringilla. In nisl nisi scelerisque eu. Maecenas ultricies mi eget mauris. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Arcu non sodales neque sodales ut etiam. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Sed euismod nisi porta lorem mollis aliquam ut. Id eu nisl nunc mi. Fusce id velit ut tortor pretium viverra suspendisse. Integer malesuada nunc vel risus commodo viverra maecenas. Nullam eget felis eget nunc lobortis. Pharetra magna ac placerat vestibulum lectus mauris. Arcu bibendum at varius vel pharetra vel."
  },
  {
    "id": 1006,
    "title": "9 reasons you can blame the recession on cats",
    "content": "Eget felis eget nunc lobortis mattis aliquam faucibus purus. Neque laoreet suspendisse interdum consectetur libero. Amet luctus venenatis lectus magna fringilla urna. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Purus sit amet luctus venenatis lectus magna fringilla urna. Luctus accumsan tortor posuere ac ut consequat semper. Metus dictum at tempor commodo. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Eget dolor morbi non arcu risus quis varius quam. Pellentesque habitant morbi tristique senectus et netus. Libero nunc consequat interdum varius sit amet. Praesent tristique magna sit amet purus gravida quis. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Et ultrices neque ornare aenean euismod. Convallis aenean et tortor at. Vitae tempus quam pellentesque nec nam aliquam. Quis blandit turpis cursus in hac habitasse platea."
  },
  {
    "id": 1007,
    "title": "10 ways marketers are making you addicted to cats",
    "content": "Sit amet est placerat in egestas erat imperdiet sed euismod. Eget arcu dictum varius duis at. Tellus in metus vulputate eu scelerisque felis. Nisi scelerisque eu ultrices vitae. Nisl nisi scelerisque eu ultrices. Commodo quis imperdiet massa tincidunt nunc. Felis donec et odio pellentesque diam. Sit amet purus gravida quis blandit turpis cursus in hac. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Semper auctor neque vitae tempus quam pellentesque nec nam. Tortor at risus viverra adipiscing at in. Mollis nunc sed id semper. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. A diam maecenas sed enim ut sem viverra aliquet. Neque viverra justo nec ultrices. Lacus viverra vitae congue eu consequat ac. Rhoncus est pellentesque elit ullamcorper dignissim cras."
  },
  {
    "id": 1008,
    "title": "11 ways investing in cats can make you a millionaire",
    "content": "Id neque aliquam vestibulum morbi blandit. Eget dolor morbi non arcu risus quis varius. Massa tincidunt nunc pulvinar sapien et. Turpis cursus in hac habitasse. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Egestas dui id ornare arcu. Augue eget arcu dictum varius duis at consectetur lorem. Nibh sit amet commodo nulla facilisi nullam. Magna etiam tempor orci eu lobortis elementum. Velit egestas dui id ornare arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Rutrum quisque non tellus orci ac auctor augue. Arcu non odio euismod lacinia at quis risus sed. Ut porttitor leo a diam sollicitudin tempor. Scelerisque fermentum dui faucibus in ornare quam viverra. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. In ornare quam viverra orci. Vel quam elementum pulvinar etiam non quam lacus"
  },
  {
    "id": 1009,
    "title": "Why you should forget everything you learned about cats",
    "content": "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Massa tempor nec feugiat nisl pretium fusce id velit. Libero id faucibus nisl tincidunt eget. Id cursus metus aliquam eleifend mi. Nullam ac tortor vitae purus. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Hac habitasse platea dictumst vestibulum rhoncus. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus."
  }
];
data.nextVal = 1010;

module.exports = data;