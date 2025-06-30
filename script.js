
function getCubeSvg(cubeStr) {
    const colorMap = {
        r: 'red',
        g: 'green',
        b: 'blue',
        y: 'yellow',
        o: 'orange',
        w: 'white'
    };

    const faceHtml = (faceStr, label) => {
        return `
      <div class="face ${label}">
        ${faceStr.split('').map(c => `<div class="tile" style="background:${colorMap[c]}"></div>`).join('')}
      </div>
    `;
    };

    // Split the cube string into 6 faces
    const [U, D, F, B, L, R] = cubeStr.match(/.{9}/g);

    return `
    <div class="cube">
      <div class="row">
        <div class="empty"></div>
        ${faceHtml(U, 'U')}
        <div class="empty"></div>
      </div>
      <div class="row">
        ${faceHtml(L, 'L')}
        ${faceHtml(F, 'F')}
        ${faceHtml(R, 'R')}
        ${faceHtml(B, 'B')}
      </div>
      <div class="row">
        <div class="empty"></div>
        ${faceHtml(D, 'D')}
        <div class="empty"></div>
      </div>
    </div>
  `;
}

