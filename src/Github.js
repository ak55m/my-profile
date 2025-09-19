import React, { useEffect, useMemo, useState } from 'react';

const GITHUB_USERNAME = 'ak55m';

const Github = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok) throw new Error('Failed to fetch user');
        if (!reposRes.ok) throw new Error('Failed to fetch repositories');

        const userJson = await userRes.json();
        const reposJson = await reposRes.json();

        if (!isCancelled) {
          setUser(userJson);
          setRepos(Array.isArray(reposJson) ? reposJson : []);
        }
      } catch (err) {
        if (!isCancelled) setError(err.message || 'Unknown error');
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchData();
    return () => { isCancelled = true; };
  }, []);

  const summary = useMemo(() => {
    const totals = {
      reposCount: repos.length,
      totalStars: 0,
      totalForks: 0,
      topLanguages: {},
    };
    for (const r of repos) {
      totals.totalStars += r.stargazers_count || 0;
      totals.totalForks += r.forks_count || 0;
      if (r.language) {
        totals.topLanguages[r.language] = (totals.topLanguages[r.language] || 0) + 1;
      }
    }
    const topLangList = Object.entries(totals.topLanguages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    return { ...totals, topLangList };
  }, [repos]);

  return (
    <div className="section-container">
      <h2 className="section-title">GitHub Statistics</h2>

      {isLoading && <p>Loading GitHub data…</p>}
      {error && <p>Error: {error}</p>}

      {!isLoading && !error && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 20 }}>
            <div className="skill-card">
              <div className="skill-name">Public Repos</div>
              <div className="skill-level">{user?.public_repos ?? summary.reposCount}</div>
            </div>
            <div className="skill-card">
              <div className="skill-name">Followers</div>
              <div className="skill-level">{user?.followers ?? 0}</div>
            </div>
            <div className="skill-card">
              <div className="skill-name">Following</div>
              <div className="skill-level">{user?.following ?? 0}</div>
            </div>
            <div className="skill-card">
              <div className="skill-name">Total Stars</div>
              <div className="skill-level">{summary.totalStars}</div>
            </div>
            <div className="skill-card">
              <div className="skill-name">Total Forks</div>
              <div className="skill-level">{summary.totalForks}</div>
            </div>
          </div>

          <div className="section-container" style={{ padding: 16 }}>
            <h3 style={{ textAlign: 'center', marginTop: 0, marginBottom: 12 }}>Top Languages</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {summary.topLangList.length === 0 && <span>No language data</span>}
              {summary.topLangList.map(([lang, count]) => (
                <span key={lang} className="tech-tag">{lang} ({count})</span>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <a className="project-link" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Github;


