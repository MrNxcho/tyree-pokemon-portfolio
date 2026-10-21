/* User-selected soundtrack, played through the official YouTube iframe API. */
let youtubePlayer=null,youtubeReady=false,youtubeLoading=false,musicLoadTimer;
const musicDock=document.querySelector('#music-dock'),musicStatus=document.querySelector('#music-status');
function soundUI(){const b=document.querySelector('#sound');b.textContent='SOUND: '+(sound?'ON':'OFF');b.setAttribute('aria-pressed',String(sound));musicDock.hidden=!sound}
function musicFailure(message){sound=false;soundUI();musicStatus.textContent=message+' You can open the track on YouTube.';musicStatus.replaceChildren(document.createTextNode(message+' '),Object.assign(document.createElement('a'),{href:'https://www.youtube.com/watch?v=dfRLeXXsdnM',target:'_blank',rel:'noopener noreferrer',textContent:'Open the track on YouTube ↗'}))}
function setSoundtrack(enabled){sound=enabled;soundUI();if(!enabled){youtubePlayer?.pauseVideo?.();youtubePlayer?.mute?.();musicStatus.textContent='Soundtrack paused.';return}
if(youtubeReady){youtubePlayer.unMute();youtubePlayer.playVideo();musicStatus.textContent='Starting Pallet Town…';return}
musicStatus.textContent='Loading Pallet Town… If playback needs a tap, use Play in the mini-player.';
if(youtubeLoading)return;youtubeLoading=true;
if(window.YT?.Player){createMusicPlayer();return}
const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.onerror=()=>{youtubeLoading=false;musicFailure('The soundtrack could not load.')};document.head.appendChild(script);
musicLoadTimer=setTimeout(()=>{if(!youtubeReady){youtubeLoading=false;musicFailure('The YouTube player did not respond.')}},20000);
}
function createMusicPlayer(){if(youtubePlayer)return;
youtubePlayer=new YT.Player('youtube-player',{width:'100%',height:'200',videoId:'dfRLeXXsdnM',playerVars:{playsinline:1,controls:1,loop:1,playlist:'dfRLeXXsdnM',origin:window.location.origin},events:{
onReady:e=>{clearTimeout(musicLoadTimer);youtubeReady=true;e.target.getIframe().title='Pokemon FireRed/LeafGreen – Pallet Town soundtrack';e.target.setVolume(35);if(sound){e.target.unMute();e.target.playVideo()}else{e.target.pauseVideo();e.target.mute()}},
onStateChange:e=>{if(!sound&&e.data===1){e.target.pauseVideo();e.target.mute();return}if(e.data===1)musicStatus.textContent='Now playing: FireRed / LeafGreen – Pallet Town.';else if(e.data===2&&sound)musicStatus.textContent='Track paused. Press Play in the mini-player to resume.'},
onAutoplayBlocked:()=>{musicStatus.textContent='Your browser needs a tap. Press Play in the mini-player to start the track.'},
onError:e=>{clearTimeout(musicLoadTimer);musicFailure(e.data===101||e.data===150?'This video does not allow embedded playback.':'YouTube could not play this track.');youtubePlayer?.pauseVideo?.()}
}})}
window.onYouTubeIframeAPIReady=createMusicPlayer;
document.querySelector('#music-stop').addEventListener('click',()=>setSoundtrack(false));
