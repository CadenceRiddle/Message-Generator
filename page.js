const facts = [
  'It would take nine years to walk to the moon.',
  'Mars is called the Red Planet because of its red coloring, which comes from the large amount of iron oxide – known on Earth as',
  'Mercurys temperature varies from -280° F on its night side to 800° F during the day.',
  'If you can spot the Andromeda Galaxy with your naked eyes, you can see something 14.7 billion billion miles away.',
  'The Sun is 400 times larger than the Moon, but also 400 times as far away, making both objects appear to be the same size in our sky.',
  'Jupiter is the largest planet. It could contain the other seven planets in just 70 percent of its volume.',
  'Stars dont twinkle until their light passes through Earths atmosphere.',
  'If Earth were the size of a tennis ball, the Sun would be a sphere 24 feet across, approximately 0.5 mile away.',
  'Of the 9,113 official features on the Moon, a mere 421 (4.6 percent) are not craters.',
  'Driving a car to the nearest star at 70 mph would take more than 356 billion years.',
  'Neptunes moon Triton is the coldest known object in the solar system with an average surface temperature of -391° F.',
  'When the Moon is half-full (First and Last Quarter phases), its only 10 percent as bright as the Full Moon.',
  'Scientists estimate that the earliest stars formed some 200 million years after the Big Bang.',
  'Jupiters Great Red Spot, which rotates once approximately every six days, is an anti-cyclonic storm 22° south of the planets equator.',
  'If you drilled a tunnel through Earth and jumped in, you would reach the other side in 42 minutes and 12 seconds, and your top speed would be 17,670 mph.',
  'To escape Earths gravity, a spacecraft must travel more than 25,008 mph, or near Mach 33.',
  'It takes 1 billion seconds for the light from a star 31.7 light-years away to reach Earth.',
  'The International Space Station completes an orbit of Earth in about 90 minutes.',
  'Venus clouds trap a lot of the Suns heat, making its temperature the hottest in the solar system: 863° F.',
  'If the Milky Way were the size of a single tennis ball, the Andromeda Galaxy (M31) would lie 5.6 feet away.'
]

function selectFact(){
  return Math.floor(Math.random() * facts.length);
}

function printFact(x){
  return facts[x];
}



function updatePage(){
  let answer = printFact(selectFact());
  alert(answer);
}
let button = document.getElementById("new-phrase-button");
button.onclick = updatePage;