// public/js/footer.js
const repoOwner = 'janiavdv';
const repoName = 'janiavdv.github.io';

async function fetchLastCommit() {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`);
    const commits = await response.json();
    const lastCommit = commits[0];

    const commitDate = new Date(lastCommit.commit.author.date).toLocaleDateString();
    const commitHash = lastCommit.sha.substring(0, 7); // Shorten commit hash
    const commitUrl = lastCommit.html_url;

    document.getElementById('commit-info').innerHTML = `
      <a href="${commitUrl}" target="_blank" class="text-blue-500 hover:text-blue-700">
        ${commitHash}
      </a> on ${commitDate}
    `;
  } catch (error) {
    console.error('Error fetching the latest commit:', error);
    document.getElementById('commit-info').innerText = 'Failed to fetch the latest commit';
  }
}

fetchLastCommit();
