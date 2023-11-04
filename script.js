let charDiv = document.getElementById('char-input');
let charName = document.getElementById('name');

const storyDiv = document.createElement('div');
storyDiv.id = 'story';
storyDiv.className = 'story';

let paraTag = document.createElement('p');

function createButton(id, text, clickHandler) {
    const buttonTag = document.createElement('button');
    buttonTag.id = id;
    buttonTag.innerText = text;
    buttonTag.onclick = clickHandler;
    storyDiv.appendChild(buttonTag);
}

function engageRobbers() {
    console.log('engage robbers');
    paraTag.innerText = "You engage in combat with the robbers. It's a tough battle, but you manage to defeat them with your superpowers.";
    paraTag.innerText += " Congratulations, you've thwarted the bank robbery!";

    document.body.style.backgroundImage = "url('https://gifdb.com/images/high/colorful-floating-balloon-d7z2fwukcy6xhd1p.gif')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    
    storyDiv.innerHTML = "";
    storyDiv.append(paraTag);

    createButton('goBack', 'Return', startStory);
}

function negotiateRobbers() {
    console.log('negotiate with robbers');
    paraTag.innerText = "You attempt to negotiate with the robbers, but they refuse and a shootout begins. With your superpowers, you subdue the robbers and save the day! Congratulations, you've thwarted the bank robbery!";

    document.body.style.backgroundImage = "url('https://gifdb.com/images/high/colorful-floating-balloon-d7z2fwukcy6xhd1p.gif')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    storyDiv.innerHTML = "";
    storyDiv.append(paraTag);

    createButton('goBack', 'Return', startStory);
}

function rushToBank() {
    console.log('rush');
    paraTag.innerText = "You rush to the bank to confront the robers. Inside, you find the armed robbers. What do you do?";
    storyDiv.innerHTML = "";
    storyDiv.append(paraTag);

    createButton('negotiateRobbers', 'Attempt to negotiate', negotiateRobbers);
    
    createButton('engageRobbers', 'Engage in combat', engageRobbers);
}

function watchPolice() {
    console.log('wath police');
    paraTag.innerText = "You decide to watch the situation unfold as the police apprehend the robbers. The police successfully arrest the robbers, and the city is safe once more. Thanks for your help in calling the police!";

    document.body.style.backgroundImage = "url('https://gifdb.com/images/high/colorful-floating-balloon-d7z2fwukcy6xhd1p.gif')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    storyDiv.innerHTML = "";
    storyDiv.append(paraTag);

    createButton('goBack', 'Return', startStory);
}

function helpPolice() {
    console.log('help police');
    paraTag.innerText = "You decide to assist the police in subduing the robbers. Together with your superpowers and the police, you successfully arrest the robbers and save the day! Congratulations, you've helped thwart the bank robbery!";

    document.body.style.backgroundImage = "url('https://gifdb.com/images/high/colorful-floating-balloon-d7z2fwukcy6xhd1p.gif')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    storyDiv.innerHTML = "";
    storyDiv.append(paraTag);

    createButton('goBack', 'Return', startStory);
}

function callPolice() {
    console.log('call police');
    paraTag.innerText = "You call the police for backup and wait for their arrival. The police arrive and confront the robbers. What do you do?";
    storyDiv.innerHTML = "";
    storyDiv.append(paraTag);
    
    createButton('watchPolice', 'Watch the situation', watchPolice);

    createButton('helpPolice', 'Help the police', helpPolice);
}

function startStory() {
    charDiv.remove();
    document.body.appendChild(storyDiv);
    paraTag.innerText = `${charName.value} you are the super hero of the city, and tonight, you revcive a distress call about a bamk robery in progress. What's your next move?`;
    storyDiv.innerHTML = "";
    storyDiv.appendChild(paraTag);

    createButton('rushToBank', 'Rush to the bank', rushToBank);
    
    createButton('callPolice', 'Call the police for backup', callPolice);
}