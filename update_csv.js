const fs = require('fs');
const path = 'd:/Desktop/RESEARCH/survey/research/public/admin.js';

let code = fs.readFileSync(path, 'utf8');

const startMarker = "// CSV Exporter (SPSS/Excel Compatible)";
const endMarker = "// Trigger Mock Data Injection (AJAX & Client-Side Serverless Firebase REST)";

const startIndex = code.indexOf(startMarker);
const endIndex = code.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newCSVLogic = `// CSV Exporter (SPSS/Excel Compatible)
btnExportCSV.addEventListener('click', () => {
  if (responsesList.length === 0) {
    showAdminToast('No data available to export.', 'danger');
    return;
  }
  
  // Build Header Columns
  const headers = [
    'RespondentID', 'Timestamp', 
    'Q1_Age', 'Q2_Gender', 'Q3_District', 'Q4_Education', 
    'Q5_Platform', 'Q6_TimeSpend', 'Q7_Content',
    'Q8_Adoption', 'Q9_Adoption', 'Q10_Adoption', 'Tech_Adoption_Score',
    'Q11_Literacy', 'Q12_Literacy', 'Q13_Literacy', 'Media_Literacy_Score'
  ];
  
  const mediaSection = surveyConfig.sections.find(s => s.isMediaSection);
  const mediaItems = mediaSection ? mediaSection.mediaItems : [];
  
  mediaItems.forEach(item => {
    headers.push(\`E_\${item.id}_Classification\`);
    headers.push(\`E_\${item.id}_Clue\`);
    headers.push(\`E_\${item.id}_IsCorrect\`);
  });
  headers.push('Detection_Score');
  
  // Row content mapping
  let csvContent = "data:text/csv;charset=utf-8," + headers.map(h => \`"\${h}"\`).join(",") + "\\n";
  
  responsesList.forEach(resp => {
    const answers = resp.answers || {};
    const row = [];
    
    row.push(resp.id);
    row.push(resp.timestamp);
    
    // Demographics
    row.push(answers.q1 || '');
    row.push(answers.q2 || '');
    row.push(answers.q3 || '');
    row.push(answers.q4 || '');
    
    // Behavior
    row.push(answers.q5 || '');
    row.push(answers.q6 || '');
    row.push((answers.q7 || '').replace(/"/g, '""'));
    
    // Tech Adoption
    let adoptSum = 0;
    for (let i = 8; i <= 10; i++) {
      row.push(answers[\`q\${i}\`] || '');
      let val = parseInt(answers[\`q\${i}\`]);
      if (!isNaN(val)) adoptSum += val;
    }
    row.push(adoptSum);
    
    // Media Literacy
    let litSum = 0;
    for (let i = 11; i <= 13; i++) {
      row.push(answers[\`q\${i}\`] || '');
      let val = parseInt(answers[\`q\${i}\`]);
      if (!isNaN(val)) litSum += val;
    }
    row.push(litSum);
    
    // Media Answers
    let correctCount = 0;
    mediaItems.forEach(item => {
      const classification = answers[item.id] || '';
      const clue = answers[\`\${item.id}_clue\`] || '';
      const isCorrect = classification === (item.trueType === "real" ? "Authentic" : "AI-Generated") ? 1 : 0;
      
      row.push(classification);
      row.push(clue.replace(/"/g, '""'));
      row.push(isCorrect);
      if (classification) correctCount += isCorrect;
    });
    row.push(correctCount);
    
    csvContent += row.map(val => \`"\${val}"\`).join(",") + "\\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", \`AI_Survey_Responses_N\${responsesList.length}.csv\`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showAdminToast('Excel CSV file successfully downloaded!', 'success');
});

  `;

  // Make sure to find the last occurrence of start marker if there are multiples
  code = code.substring(0, startIndex) + newCSVLogic + code.substring(endIndex - 2); // -2 to keep indentation
  fs.writeFileSync(path, code);
  console.log("CSV Exporter successfully updated!");
} else {
  console.log("Could not find markers.", startIndex, endIndex);
}
