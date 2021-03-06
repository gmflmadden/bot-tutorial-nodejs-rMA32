var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/;botRegexGod = /^\/God/
      botRegexAd=/^\/advance/;botRegexBroncos = /^\/Broncos/;botRegexSaints = /^\/Saints/;botRegexCheese = /^\/Cheese/;botRegexDeezNuts = /^\/DeezNuts/;botRegexBengals = /^\/Bengals/;botRegexBills = /^\/Bills/;botRegexSeahawks = /^\/Seahawks/;botRegexPanthers = /^\/Panthers/;botRegexPackers = /^\/Packers/;botRegexSteelers = /^\/Steelers/;botRegexFalcons = /^\/Falcons/;botRegexColts = /^\/Colts/;botRegexCardinals = /^\/Cardinals/;botRegexVikings = /^\/Vikings/;botRegexDolphins = /^\/Dolphons/;botRegexCowboys = /^\/Cowboys/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/GMFL16/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://s12.postimg.org/8mcho4fdp/306x240_jpeg_e6ba0a2e594b4832ace6573ec42ce3a2_la.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/GMFL16/rules");
    this.res.end();
  } 
    else if(request.text && botRegexGod.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cmster.com/media/nhDqIWM5m7McSjzCWUZ2yam3JtHlwaUOJ8K3fwlKNChaluU7waXa6heN4JgYOjHL.jpg");
    this.res.end();
  } 
      else if(request.text && botRegexBroncos.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/xx3windy1city2xx");
    this.res.end();
  } 
      else if(request.text && botRegexSaints.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/ford504");
    this.res.end();
  } 
      else if(request.text && botRegexColts.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/panthersnation7");
    this.res.end();
  } 
      else if(request.text && botRegexDolphins.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/kingrich305");
    this.res.end();
  } 
      else if(request.text && botRegexVikings.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/puba1978");
    this.res.end();
  } 
      else if(request.text && botRegexCowboys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/twcarter1117");
    this.res.end();
  } 
      else if(request.text && botRegexBengals.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/xldvs_killalx");
    this.res.end();
  } 
      else if(request.text && botRegexDeezNuts.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://bossip.files.wordpress.com/2015/08/screen-shot-2015-08-24-at-2-42-49-pm.png?w=700");
    this.res.end();
  } 
      else if(request.text && botRegexBills.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/mickey1315");
    this.res.end();
  } 
      else if(request.text && botRegexCardinals.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/bhyman20");
    this.res.end();  
  } 
      else if(request.text && botRegexSeahawks.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/nogarandt11");
    this.res.end();  
  } 
      else if(request.text && botRegexPackers.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/kidcurry_56");
    this.res.end();
  } 
      else if(request.text && botRegexSteelers.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/djp514");
    this.res.end();
  } 
      else if(request.text && botRegexFalcons.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/theagressivep00p");
    this.res.end();
  } 
      else if(request.text && botRegexCheese.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.packerpalace.com/palace02/maddenwcheese.gif");
    this.res.end();
  } 
      else if(request.text && botRegexPanthers.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.Twitch.tv/bossalfred87");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/GMFL16/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/GMFL16/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
