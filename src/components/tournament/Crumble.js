import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table'
import './Tournament.css'

const Crumble = () => {
    const style = {
        paddingBottom : "30px"
    }
    return (
        <div className="tourney-container">
            <h1 style={style}>Welcome 2 The Crumble</h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Results</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">News</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9} className="tourney-content">
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <div className="crumb-results">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Series Won</th>
                  <th>Series Lost</th>
                  <th>Games Won</th>
                  <th>Games Lost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Einbirnenbaum</td>
                  <td>1</td>
                  <td>0</td>
                  <td>3</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Dank</td>
                  <td>1</td>
                  <td>1</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Nicekill</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Skrumpf</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Romomo</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>RealSisu</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Series Won</th>
                  <th>Series Lost</th>
                  <th>Games Won</th>
                  <th>Games Lost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wifefu</td>
                  <td>3</td>
                  <td>0</td>
                  <td>9</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Gucky</td>
                  <td>2</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Banger</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Kingpiccolo</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>CaptainK</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Poh</td>
                  <td>0</td>
                  <td>2</td>
                  <td>0</td>
                  <td>6</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Series Won</th>
                  <th>Series Lost</th>
                  <th>Games Won</th>
                  <th>Games Lost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jacob</td>
                  <td>2</td>
                  <td>0</td>
                  <td>6</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>OnePierre</td>
                  <td>1</td>
                  <td>0</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>RandomEpicDude</td>
                  <td>1</td>
                  <td>2</td>
                  <td>5</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>22argd</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>wata</td>
                  <td>1</td>
                  <td>2</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Mirrus</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>3</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Series Won</th>
                  <th>Series Lost</th>
                  <th>Games Won</th>
                  <th>Games Lost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Moosner</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>PoolBoi</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>R3lphi</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Nefoshwott</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>ItzEvilEyez</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>ProtagonistG</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className="crumble-interview">
          <h3 className="crumble-subheader">Fun And Games</h3>
          <span >The strikers discord, the hub of mario strikers for the gamecube and Wii, has recently seen immense competition and attention at the top of the rankings. However, a new tournament has recently arrived to introduce several new, and some familiar faces, to the peak of interest for the original Super Mario Strikers community. In this tournament, we have so many folks who have joined within the last 6 weeks, in addition to some folks who have been around a while, and we’ll dive into quite a few of them, their SMS background, and their thoughts on others coming up to, for many of them, their first tournament in the league. 
        </span>
        </div>
        <div className="crumble-interview">
        <h3 className="crumble-subheader">Einbirnenbaum</h3>
        <span>The first player I talked to was Einbirnenbaum, who probably has been around the discord the longest, but only recently joined the SMS community. He joined the SMS discord nearly 3 years ago, and has spent so much time playing charged that he was hoping to move that over to SMS as well.
	“It’s funny, you see so many folks who love to sidekick toad, but as MSC’s toads are really not that good, I could never get into them. Now koopa, that’s where the good stuff is. Koopa’s got great moves, and his shot is so clean.” 
	‘Now Ein, who would you say your favorite character is for SMS?’
	“Well, it’s gotta be Daisy or Waluigi. Don’t wanna have just one main in case someone else takes your player from ya, but those 2 always are great.”
	‘As you enter this tournament, where do you see yourself amongst the ranking of those all over? Globally, where are you as a player of Super Mario Strikers?’
	“Well, As I haven’t been playing a crazy long time, I’d probably say around top 1000, there’s many not on this discord, but I’d say I’m in the upper echelon for overall players.”
	It is important to note, Einbirnenbaum did participate in the Spring Split, and did beat another competitor in the Crumble tournament, in addition to taking Mylo Grams, and much more notably XanderG to 5 games in bo5 series.
	I finally wrapped up by asking Ein if there was any question he was waiting for me to ask, and he only had one request. To ask him if he liked pears.
	‘Well, Do you like pears?’
	His response? “No ”
    <br />
	Einbirnenbaum is truly a mysterious character, and has a tremendous sense of humor, and I’ll be looking forward to his games in the tournament!
	<br /> <br />
	<b>Pool A: </b>Einbirnenbaum, Nicekill, Dank, Skrumpf, Romomo, RealSisu
    <br />
	<b>Prediction: </b>I think Ein has a chance to do very well in his pool. Of those 5, I don’t know who would beat him in a series, so I’d be willing to put him at either 1st or 2nd in his pool, and expect him to win a playoff series or 2. I don’t expect Ein to win the whole tournament, but the way these go, you never quite know what will happen.
</span>
</div>
<div className="crumble-interview">
  <h3 className="crumble-subheader">Mirrux</h3>
  <span>The next player I ran into was Mirrux. I had not even seen Mirrux in any chats before finding out he had joined the tournament, but was excited to see what he had to tell me about himself, and the upcoming tournament.
	“I’ve been playing Charged since I was a wee lad, but I only looked at the gamecube version when I emulated it, and really enjoyed it! About a month ago I joined the server and when the news of battle league broke, I knew I had to get back into the older style to at least know how Battle League compares!”
	‘So you’re more adept with Charged, where would you rank in terms of SMS players worldwide?’
	“Pretty low, not much better than like 10,000th if I’m honest with you. I think I’m ok, but still have a lot of work to do.”
	‘Now, I noticed your name, it’s a very interesting one, Mirrux. Do you mind me asking where it comes from?’
	Mirrux smiled and his face started glowing. “I have Croation ancestry, and took a Croation word meaning ‘Peaceful’ and modified it to look like a username. It’s special for me.” 
	I asked him how he thought he’d do in the tournament. He didn’t seem to have a lot of confidence in his game “I’m probably the bottom 50% of those playing, so we’ll see.” He smirked a little, but afterward, he quickly shrugged away and headed off the podium.
	<br /> <br />
	<b>Pool B: </b>Jacob, Onepierre, RandomEpicDude, Mirrux, 22agrd, Wata
  <br />
  <b>Prediction: </b>While I’m not as high on Mirrux (which still might be higher than Mirrux is on himself), I believe Mirrux has a couple series to win. I don’t know if he’ll defeat Jacob, and if he does this entire pool is going to be flipped on its head. I think Mirrux has a couple series he could pull out, and depending on the playoff structure, possibly make the playoffs as well. I see him getting 4th in Pool B.
</span>
</div>
<div className="crumble-interview">
  <h3 className="crumble-subheader">TheRealSissu</h3>
  <span>Mr. Sisu had a lot of bravado in his demeanor when he walked onto the media podium on Tuesday. Before anyone could ask him a question, he immediately stated “Before we begin, I want everyone to know 3 things. I am a Waluigi main, the blue shell is the best item in super mario strikers, and anyone who hates on hammer bros is invited to leave the room right now.”
	While many other media members packed their things to leave, I couldn’t help but quench my fascination of this character. Before I even had a chance to speak, Sisu remarked, “well, easy crumb easy go I guess. All right, who’s first?”
	‘Mr. Sisu, where does your name come from?’
	“Well, it derives from a Finnish concept ‘Sisu,’ which is a stoic determination, a grit, resilience, tenacity. I’m not even finnish, but it’s such a great concept that it’s always stuck with me.”
	‘Mr. Sisu, your previous participation in other scenes has really shown you as a robinhood of spotlight; would you say that’s true?’
	“Oh absolutely. Some other idiot reporter asked a bunch of stupid questions to me one time, but one that stuck with me was ‘which mario character would you hang out with?’ And I said Luigi, because he gets no spotlight. It’s always his brother’s shadow. I want Luigi to control the day, because when people think about sonder, they think about sonder for main characters, but they don’t think about the thoughts and feelings of NPCs who have dynamic personalities. Luigi’s one of those guys, he got that dog in him.”
	‘On your thoughts on the upcoming crumble tournament, what do you expect of yourself, and what do you expect of your competitors?’
	“Well, while I certainly have the confidence in my abilities, I know it’s better to be humble than to be humbled, and I know several folks in this tournament are going to be high quality players. I expect to pull out 2 or 3 series, maybe make the playoffs if things shape up right, and we’ll see where it goes from there”
Before I got the chance to ask another question, a guard walked up to TheRealSisu and pulled him aside. It seemed there were other pressing matters to attend to, but he thanked us for coming and believing in hammer bros before heading off to his next endeavor.
	<br /><br />
	<b>Pool A: </b>Einbirnenbaum, Nicekill, Dank, Skrumpf, Romomo, RealSisu
	<br />
  <b>Prediction: </b>Prediction: TheRealSisu is by far one of my favorite personalities of the crumble tournament, and while my recalling of the events may specifically point to his confidence, this gentleman was very kind and very appreciative of his opportunities. I don’t know if he’ll go far in this tournament, but I have 2 predictions which I can see becoming truth. Either he will go 1/5 in series and be 5th place in his pool, or he will win 3 or 4 series and make the playoffs, and with his demeanor and confidence really shake some folks up, going on a deep playoff run. I’ll go with the former, but don’t be surprised if the latter is true. 
</span>
</div>
<div className="crumble-interview">
  <h3 className="crumble-subheader">R3LPHI</h3>
  <span>
  The next to step to the podium was R3lphi.
	‘R3lphi, we hear you’re pretty new at this game. Tell us about your experience getting involved.’
	“Well, I just joined about a week ago, so while I’m still very new to the game, I’m excited to play some new players and see the skill gap. But right now, I’d say I’m near the bottom. For right now, that is.”
	‘So as a new player, what drew you to the SMS community?’
	“Well, as a kid I loved the FIFA video games. But I never really knew the names of players or teams. All of a sudden, here’s a faster-paced, more memorable game with mario characters and more action during a game, and it felt like the perfect fit. The snappy movement, the design. Mix that in with the community, and it was a perfect place to be.”
	‘Final question. What’s your team going to look like come tournament time?’
	“Well, I’m really looking at Mario and toad, seems like the classic combo, and I’ve always been a big fan of toad. But as time progresses, I look more and more for other avenues, I personally am a big fan of Waluigi and believe he doesn’t receive the respect he deserves, so as I learn more and more about the game, I may change to him or someone else. Don’t expect to see me with DK though, that ain’t happening.”
	<br /><br />
	<b>Pool D: </b>Moosner, Poolboi, ProtagonistG, Nefoshwott, ItzEvilEyez, R3lphi
  <br />
	<b>Prediction: </b>This is a hard pool. The Pool literally has a Pool boi, who I expect to clean up a lot of the pool per his names’ sake. The top 3 experienced players of Moosner, Poolboi, and Protagonist G are going to be a tough hill to climb so quickly, so I expect R3lphi to take a series from one of the other relative rookies in the tournament, and get some experience as it leads up to a much more competitive game for him in the future.
  </span>
</div>
<div className="crumble-interview">
  <h3 className="crumble-subheader">Randomepicdude</h3>
  <span>
  As the microphone introduced the next competitor, I was surprised that the Random Epic Dude was actually a calm, relatively normal looking man walked up to the podium. He quickly let us know that his name was just pronounced right for the first time ever.
	“Normally they say ‘Random Pic Dude’ but it’s not about pictures. Clearly it’s an old colloquialism, but Epic was the word of the time, so that became my Moniker forever”
‘How prepared do you feel for this upcoming tournament? The Crumble is a big tournament for a lot of new comers, and even experienced players love participating in it’
“Well, I think I’m ready. I joined the discord only 2 weeks ago, but I’ve been playing the game since I was 7. Plus, I’ve been hitting the field a lot since I picked up the game again about a month ago, and I feel ready to go. I really focus on item usage and making no mistakes on defense, while aggressively using items to get the opportunities I plan for on offense. With Yoshi and toad now taking over for my old team of Mario and Hammer Bros, I think I’m set up to be a solid competitor as the tournament arrives. I actually about a week ago hit a goal that made the highlight reel for the month where I took a charged lob from half and the goalie just watched my run up and kick in the rebound for a goal. It felt very refreshing and was amazing and really signaled to me that I have a shot.”
Just then, another competitor came from the locker room, dressed in just his game shorts and cleats, with no shirt on. It was Poolboi.
“Did you just say charged lob?”
<br />
The room was awfully quite, I nodded somewhat hesitantly, and he pumped his fist and returned to the locker room. Looks like Random had already found a fan.
	‘Well Random, you’ve clearly made a fan already. Do you have any enemies or matchups we should watch out for?’
	“Yes, actually! I have recently played a lot of games with DanK, and all of them are super close. I don’t think I’m in his Pool, but I’ll be rooting for him to make the playoffs to face off in an official setting soon.”
	<br /> <br />
	<b>Pool C: </b>Jacob, OnePierre, RandomEpicDude, Mirrux, 22agrd, Wata
	<br />
  <b>Prediction: </b>This is where my predictions may go off the rails. Jacob is the clear favorite to win this bracket, with OnePierre close behind him. With that said, I believe in RandomEpicDude. It’s in his name; he’s random, and he can pull it out. If he can learn some techs for use in the tournament, he’ll be dangerous with his previous knowledge of the game. I see him making the playoffs, and possibly winning a few series when there.
  </span>
</div>
<div className="crumble-interview">
  <h3 className="crumble-subheader">Wata</h3>
  <span>
  Wata, a regular in the MSC community, has recently started participating a lot more with SMS. And he’s been having a great time so far, cementing himself solidly in the Professional II category. After this tournament, that may shake up, but Wata has provided the community with a solid playstyle that hadn’t really been seen a whole lot before his arrival.
	“I play defense solidly. I let the offense do what I want them to do, and if they want to change that, they have to beat me to do it. And offensively, y’all know I love DK, so I love to use those items to throw up the banana walls, my favorite, and create space for open looks. It’s straightforward, and it works.”
	‘Wata, we know you’re an MSC regular; what made you join SMS as well?’
	“Well, I really just wanted a break from MSC, and what better way than to keep my skills still in check then to play the other game in the server! It’s been great so far, and I hope it continues to build as it has.”
	‘A big question floating around is which character from Mario Strikers would you bring to life to hang out with if you could. So, wata, who would you do that w..’
	“Rosalina, easily. How could you not want to hang out with a floating space princess?”
	‘That would be great, Wata but I’m not s…’
	“Could float through the other, the ability to breathe in space, got a cool little Luna?”
	‘Yes, but in the original SMS…’
	“Yeah, Rosalina, definitely. No doubt. Any other questions? No? Ok, thank you all for your time”
<br />
Wata rushed off the stage, seemingly giddy about the idea of wanting to hang out with Rosalina. It was heartwarming, but peculiar. 
	<br /><br />
	<b>Pool C: </b>Jacob, OnePierre, RandomEpicDude, Mirrux, 22agrd, Wata
  <br />
	<b>Prediction: </b>This is a hard pool. I don’t think Wata will find success in a lot of series, but I could see him taking every series he plays in to 5 games. I think he wins 2 series, but is overall a major player and those 2 series could be against who ends up number 1 or 2 in the pool. Expect the unexpected with Wata.
  </span>
</div>
<div className="crumble-interview">
  <h3 className="crumble-subheader">Jacob</h3>
  <span>
  Jacob took the stand with a Gatorade in his hand. He motioned to the reporters to ask their questions, so I started.
	‘Jacob, you’re one of the more experienced competitors in terms of the discord. How long have you been around there?’
	“About 3-4 months.”
	‘I see, what characters do you think you’re going to be using in the upcoming tournament?’
	“Mario. Hammer Bros.”
	‘And is that due to your play style?’
	“I love mushrooms so yes. I play steal heavy, so they help with that.”
	‘Is there anything outside of strikers you do for fun? Are you worried about distractions outside of the games upcoming?’
	“I do sonic Riders competitive. No.”
	I’d run out of questions, and no one else had much to ask. Jacob stood at the podium wide eyed, almost menacingly. Then after silence for about 10 seconds, he said “Thank you” and walked off. He had a look in his eyes. This tournament was going to be his.
  <br /><br />
	<b>Pool C: </b>Jacob, OnePierre, RandomEpicDude, Mirrux, 22agrd, Wata
  <br />
	<b>Prediction: </b>Jacob is the favorite. I think I’d be remiss If I said he wasn’t the favorite. Jacob’s expectation is to dominate his pool, and I can see him doing so. I predict he will make the playoffs, and make it pretty far. I’d be willing to bet Jacob will make the finals. Whether he wins or not… we’ll have to see.
  </span>
</div>



        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </div>
    )
}

export default Crumble