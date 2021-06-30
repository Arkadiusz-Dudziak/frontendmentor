const subtitles = document.getElementsByClassName('subtitle');
const all_paragraphs = document.getElementsByTagName('p');
const arrows = document.getElementsByClassName('arrow');
const headers = document.getElementsByTagName('h3');

Array.from(subtitles).forEach(element => {
    element.addEventListener('click', () => {
        const p = element.getElementsByTagName('p')[0];
        const header = element.getElementsByTagName('h3')[0];
        const arrow = element.getElementsByTagName('img')[0];

        Array.from(all_paragraphs).forEach(paragraph => {
            paragraph.style.display = 'none';
        });
        Array.from(headers).forEach(header => {
            header.style.fontWeight = 'normal';
        });
        Array.from(arrows).forEach(arrow => {
            arrow.style.transform = "rotate(0deg)";
        });

        if(p.style.display == 'none')
        {
            header.style.fontWeight = 700;
            p.style.display = 'block';
            arrow.style.transform = "rotate(-180deg)";
        }
        else {
            header.style.fontWeight = 'normal';
            p.style.display = 'none';
            arrow.style.transform = "rotate(0deg)";
        }
    })
})