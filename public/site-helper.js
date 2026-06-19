// public/site-helper.js

/**
 * 页面辅助工具：生成提示卡片、关键词徽章和访问说明
 * 不依赖第三方库，纯原生 DOM 操作
 */

(function() {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://china-m-hth.com',
    keyword: '华体会',
    badgeColors: ['#3498db', '#e67e22', '#2ecc71', '#9b59b6', '#1abc9c']
  };

  /**
   * 创建提示卡片并插入到指定容器
   * @param {string} containerId - 目标容器 ID
   * @param {string} message - 提示文本
   * @returns {HTMLElement} 创建的卡片元素
   */
  function createTipCard(containerId, message) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn('Container not found:', containerId);
      return null;
    }

    const card = document.createElement('div');
    card.className = 'tip-card';
    card.style.cssText = `
      background: #f0f4f8;
      border-left: 4px solid #2980b9;
      padding: 12px 16px;
      margin: 10px 0;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      font-size: 14px;
      line-height: 1.5;
    `;

    const icon = document.createElement('span');
    icon.textContent = '💡 ';
    icon.style.fontSize = '18px';

    const text = document.createElement('span');
    text.textContent = message;

    card.appendChild(icon);
    card.appendChild(text);
    container.appendChild(card);

    return card;
  }

  /**
   * 生成关键词徽章并插入到指定容器
   * @param {string} containerId - 目标容器 ID
   * @param {string[]} keywords - 关键词列表
   */
  function createBadges(containerId, keywords) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn('Container not found:', containerId);
      return;
    }

    keywords.forEach((keyword, index) => {
      const badge = document.createElement('span');
      badge.className = 'keyword-badge';
      badge.textContent = keyword;
      badge.style.cssText = `
        display: inline-block;
        background: ${CONFIG.badgeColors[index % CONFIG.badgeColors.length]};
        color: #fff;
        padding: 4px 10px;
        margin: 4px 6px 4px 0;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.5px;
        cursor: default;
        user-select: none;
      `;
      container.appendChild(badge);
    });
  }

  /**
   * 生成访问说明区域并插入到指定容器
   * @param {string} containerId - 目标容器 ID
   * @param {string} url - 目标网址
   * @param {string} siteName - 网站名称
   */
  function createAccessGuide(containerId, url, siteName) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn('Container not found:', containerId);
      return;
    }

    const guide = document.createElement('div');
    guide.className = 'access-guide';
    guide.style.cssText = `
      background: #eaf7ea;
      border: 1px solid #b8e0b8;
      padding: 14px 18px;
      margin: 12px 0;
      border-radius: 6px;
      font-size: 14px;
    `;

    const title = document.createElement('strong');
    title.textContent = '📘 访问说明';
    title.style.display = 'block';
    title.style.marginBottom = '8px';

    const desc = document.createElement('p');
    desc.style.margin = '0 0 6px 0';
    desc.innerHTML = `欢迎访问 <a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #2c3e50; text-decoration: underline;">${siteName}</a>，请遵守平台规则。`;

    const note = document.createElement('p');
    note.style.margin = '0';
    note.style.color = '#555';
    note.textContent = '如果遇到加载问题，请尝试刷新页面或更换网络环境。';

    guide.appendChild(title);
    guide.appendChild(desc);
    guide.appendChild(note);
    container.appendChild(guide);
  }

  // 示例数据
  const sampleKeywords = [CONFIG.keyword, '体育赛事', '在线娱乐', '安全访问'];

  // 等待 DOM 加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // 创建提示卡片
    createTipCard('tip-container', '本页面提供快捷导航与提示信息，确保您获得最佳体验。');

    // 创建关键词徽章
    createBadges('badge-container', sampleKeywords);

    // 创建访问说明（使用配置中的 URL 和关键词作为网站名）
    createAccessGuide('guide-container', CONFIG.siteUrl, CONFIG.keyword);
  }

})();