window.__ModuleLoader__.load({
  id: 'dsh-workspace-path',
  factory: (require) => {
    const module = { exports: {} }, React = require('react'), ReactDOM = require('react-dom'), h = React.createElement
    const css = ".dsh-wspath{position:relative;flex:none;display:inline-flex;align-items:center;justify-content:center}\n.dsh-wspath-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;border-radius:50%;padding:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background-color 120ms ease,color 120ms ease}\n.dsh-wspath-btn:hover,.dsh-wspath-btn.is-open{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-panel{box-sizing:border-box;z-index:80;display:flex;flex-direction:column;width:min(340px,calc(100vw - 16px));max-height:min(440px,calc(100vh - 24px));padding:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-panel.is-hero{z-index:120}\n.dsh-wspath-search-row{display:flex;align-items:center;gap:6px;margin:0 4px 6px}\n.dsh-wspath-search-row input{flex:1;min-width:0;height:32px;padding:0 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px}\n.dsh-wspath-search-row input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}\n.dsh-wspath-add-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-secondary);cursor:pointer}\n.dsh-wspath-add-btn:hover,.dsh-wspath-add-btn.is-active{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-add-btn:disabled{opacity:.45;cursor:default}\n.dsh-wspath-list{min-height:0;flex:1;display:flex;flex-direction:column;gap:2px;overflow:auto}\n.dsh-wspath-empty{padding:12px 8px;font-size:13px;color:var(--dsw-alias-label-secondary)}\n.dsh-wspath-section{flex:none;padding:6px 8px 2px;font-size:11px;font-weight:600;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-back,.dsh-wspath-days-btn{appearance:none;display:flex;align-items:center;gap:6px;width:100%;height:32px;margin:0;padding:0 8px;border:none;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;text-align:left}\n.dsh-wspath-days-btn{justify-content:space-between;margin-top:4px;flex:none}\n.dsh-wspath-back:hover,.dsh-wspath-days-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-row{box-sizing:border-box;width:100%;display:flex;align-items:center;gap:2px;padding:2px;border-radius:8px}\n.dsh-wspath-row.is-current,.dsh-wspath-row:hover{background:var(--dsw-alias-interactive-bg-hover)}\n.dsh-wspath-item{appearance:none;box-sizing:border-box;min-width:0;flex:1;display:flex;flex-direction:column;gap:2px;margin:0;padding:6px 8px;border:none;border-radius:8px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}\n.dsh-wspath-item:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--dsw-alias-brand-primary)}\n.dsh-wspath-title{display:flex;align-items:center;gap:6px;min-width:0}\n.dsh-wspath-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:500}\n.dsh-wspath-badge,.dsh-wspath-kind{flex:none;padding:0 6px;border-radius:999px;background:var(--dsw-alias-interactive-bg-active, var(--dsw-alias-bg-layer-1));font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary)}\n.dsh-wspath-kind{font-size:10px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-git{flex:none;display:inline-flex;align-items:center;font-size:11px;line-height:16px;font-weight:600;color:var(--dsw-alias-state-success-primary, #10b981)}\n.dsh-wspath-git.is-dirty{color:#f59e0b}\n.dsh-wspath-path{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-actions{display:flex;align-items:center;gap:2px;flex:none}\n.dsh-wspath-icon-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin:0;padding:0;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer}\n.dsh-wspath-icon-btn:hover{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-status{flex:none;padding:6px 8px 2px;font-size:12px;color:var(--dsw-alias-label-secondary)}\n.dsh-wspath-status.is-error{color:var(--dsw-alias-state-error-primary)}\n.dsh-wspath-hbadge,.dsh-wspath-hgroup{display:inline-flex;align-items:center;height:24px;padding:0 3px 0 8px;border:1px solid var(--dsw-alias-border-l2, rgba(128,128,128,0.22));border-radius:12px;background:var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.06));gap:2px;flex:none;transition:border-color 120ms ease}\n.dsh-wspath-web{display:inline-flex;align-items:center;flex:none}\n.dsh-wspath-web-btn{appearance:none;display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2,rgba(128,128,128,.22));border-radius:12px;background:var(--dsw-alias-interactive-bg-hover,rgba(128,128,128,.06));color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;font-weight:500;line-height:22px;cursor:pointer;user-select:none;transition:background-color 120ms ease,border-color 120ms ease,color 120ms ease}\n.dsh-wspath-web-btn:hover{background:var(--dsw-alias-interactive-bg-pressed,rgba(128,128,128,.14));border-color:var(--dsw-alias-border-l1,rgba(128,128,128,.38));color:var(--dsw-alias-label-primary)}\n.dsh-wspath-web-btn:focus-visible{outline:none;box-shadow:0 0 0 2px var(--dsw-alias-brand-primary,#2563eb)}\n.dsh-wspath-web-btn[data-state=\"busy\"]{opacity:.6;cursor:default}\n.dsh-wspath-web-btn[data-state=\"error\"]{color:var(--dsw-alias-state-error-primary,#f87171)}\n.dsh-wspath-web-btn[data-state=\"busy\"] svg{animation:dsh-wspath-web-spin .9s linear infinite}\n@keyframes dsh-wspath-web-spin{to{transform:rotate(360deg)}}\n.dsh-wspath-hgroup:hover{border-color:var(--dsw-alias-border-l1, rgba(128,128,128,0.38))}\n.dsh-wspath-hbtn{appearance:none;display:inline-flex;align-items:center;gap:5px;height:20px;padding:0;border:none;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;font-weight:500;line-height:20px;cursor:pointer;max-width:180px;user-select:none;transition:color 120ms ease}\n.dsh-wspath-hbtn:hover{color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hbtn.is-copied{color:var(--dsw-alias-state-success-primary, #10b981)}\n.dsh-wspath-hicon{flex:none;color:inherit;display:inline-flex;align-items:center}\n.dsh-wspath-hname{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1}\n.dsh-wspath-hsep{width:1px;height:12px;background:var(--dsw-alias-border-l2, rgba(128,128,128,0.22));margin:0 2px;flex:none}\n.dsh-wspath-hactions{display:inline-flex;align-items:center;gap:1px}\n.dsh-wspath-haction-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:none;border-radius:4px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background-color 100ms ease,color 100ms ease}\n.dsh-wspath-haction-btn:hover{background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.16));color:var(--dsw-alias-label-primary)}\n.dsh-wspath-haction-btn:active{background:var(--dsw-alias-border-l2, rgba(128,128,128,0.26))}\n.dsh-wspath-haction-btn.is-copied{color:var(--dsw-alias-state-success-primary, #10b981);background:rgba(16,185,129,0.12)}\n.dsh-wspath-hmenu{box-sizing:border-box;z-index:100;display:flex;flex-direction:column;width:min(320px,calc(100vw - 16px));padding:6px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hmenu-head{padding:4px 8px 6px}\n.dsh-wspath-hmenu-title{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hmenu-titletxt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dsh-wspath-hmenu-path{margin-top:3px;font-size:11px;color:var(--dsw-alias-label-tertiary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}\n.dsh-wspath-hmenu-divider{height:1px;background:var(--dsw-alias-border-l2);margin:4px 0}\n.dsh-wspath-hmenu-list{display:flex;flex-direction:column;gap:2px}\n.dsh-wspath-hmenu-item{appearance:none;display:flex;align-items:center;gap:8px;width:100%;height:30px;padding:0 8px;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;text-align:left;transition:background-color 100ms ease,color 100ms ease}\n.dsh-wspath-hmenu-item:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hmenu-item.is-active{color:var(--dsw-alias-brand-primary, #2563eb)}\n.dsh-wspath-hmenu-icon{display:inline-flex;align-items:center;justify-content:center;width:16px;flex:none;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-hmenu-item:hover .dsh-wspath-hmenu-icon{color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hmenu-status{padding:4px 8px;font-size:11px;border-radius:6px;color:var(--dsw-alias-state-success-primary, #10b981);background:rgba(16,185,129,0.1);margin-top:2px;text-align:center}\n.dsh-wspath-sid-badge{position:relative;display:inline-flex;align-items:center;flex:none;margin-left:4px}\n.dsh-wspath-sid-btn{appearance:none;display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2, rgba(128,128,128,0.22));border-radius:12px;background:var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.06));color:var(--dsw-alias-label-secondary);font:inherit;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;line-height:22px;cursor:pointer;transition:all 120ms ease;user-select:none}\n.dsh-wspath-sid-btn:hover,.dsh-wspath-sid-btn.is-open{background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.15));border-color:#2563eb;color:#2563eb}\n.dsh-wspath-sid-icon{font-weight:700;font-size:11px;color:var(--dsw-alias-label-tertiary,#888);margin-right:1px}\n.dsh-wspath-sid-popover{box-sizing:border-box;z-index:100;display:flex;flex-direction:column;width:min(340px,calc(100vw - 16px));padding:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-sid-head{padding:2px 4px 6px}\n.dsh-wspath-sid-title{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary)}\n.dsh-wspath-sid-titletxt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dsh-wspath-sid-label{margin-top:6px;font-size:11px;color:var(--dsw-alias-label-tertiary,#888)}\n.dsh-wspath-sid-codebox{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:4px;padding:4px 8px;border-radius:6px;background:var(--dsw-alias-bg-layer-1, rgba(128,128,128,0.08));border:1px solid var(--dsw-alias-border-l2)}\n.dsh-wspath-sid-code{font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;color:var(--dsw-alias-label-primary);user-select:all;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dsh-wspath-sid-copybtn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;padding:0;border:none;border-radius:4px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;flex-shrink:0}\n.dsh-wspath-sid-copybtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:#2563eb}\n[class*=\"_footArea\"]:has(.dsh-wspath){flex-direction:row !important;align-items:center !important;gap:4px !important}\n[class*=\"_footArea\"]:has(.dsh-wspath) [class*=\"_settingsArea\"]{flex:1 1 auto !important;width:auto !important;min-width:0 !important}\n[class*=\"_footArea\"]:has(.dsh-wspath) [class*=\"_footerActions\"]{order:2 !important;flex:none !important;width:auto !important;display:flex !important;align-items:center !important;justify-content:flex-end !important}\n.dsh-hero-tools{order:99;display:inline-flex;align-items:center;gap:4px;margin-left:6px;flex:none}\n.dsh-hero-tools-sep{width:1px;height:12px;background:var(--dsw-alias-border-l2, rgba(128,128,128,0.22));margin:0 2px;flex:none}\n.dsh-hero-tool-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;height:24px;min-width:24px;padding:0 6px;border:1px solid var(--dsw-alias-border-l2, rgba(128,128,128,0.22));border-radius:12px;background:var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.06));color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;transition:all 120ms ease;user-select:none}\n.dsh-hero-tool-btn:hover{background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.14));color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l1, rgba(128,128,128,0.38))}\n.dsh-hero-tool-btn.is-copied{color:var(--dsw-alias-state-success-primary, #10b981);background:rgba(16,185,129,0.12);border-color:rgba(16,185,129,0.3)}\n.dsh-hero-split-btn{display:inline-flex;align-items:center;height:24px;border:1px solid var(--dsw-alias-border-l2, rgba(128,128,128,0.22));border-radius:12px;background:var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.06));transition:border-color 120ms ease;position:relative}\n.dsh-hero-split-btn:hover,.dsh-hero-split-btn.is-open{border-color:var(--dsw-alias-border-l1, rgba(128,128,128,0.38))}\n.dsh-hero-split-main{appearance:none;display:inline-flex;align-items:center;gap:4px;height:100%;padding:0 6px 0 8px;border:none;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;border-radius:11px 0 0 11px;transition:background-color 100ms ease,color 100ms ease}\n.dsh-hero-split-main:hover{background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.12));color:var(--dsw-alias-label-primary)}\n.dsh-hero-split-sep{width:1px;height:12px;background:var(--dsw-alias-border-l2, rgba(128,128,128,0.22));flex:none}\n.dsh-hero-split-arrow{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:18px;height:100%;padding:0;border:none;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;border-radius:0 11px 11px 0;transition:background-color 100ms ease,color 100ms ease}\n.dsh-hero-split-arrow:hover,.dsh-hero-split-btn.is-open .dsh-hero-split-arrow{background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.12));color:var(--dsw-alias-label-primary)}\n.dsh-hero-app-menu{box-sizing:border-box;z-index:100;display:flex;flex-direction:column;min-width:160px;padding:4px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}\n.dsh-hero-app-item{appearance:none;display:flex;align-items:center;gap:8px;width:100%;height:30px;padding:0 8px;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;text-align:left;transition:all 100ms ease}\n.dsh-hero-app-item:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-hero-app-item.is-selected{color:var(--dsw-alias-brand-primary, #2563eb);font-weight:500}\n.dsh-hero-app-icon{width:14px;height:14px;object-fit:contain;flex:none}\n.dsh-hero-app-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dsh-hero-app-badge{font-size:11px;color:var(--dsw-alias-label-tertiary);flex:none}\n.dsh-dev-actions{display:inline-flex;align-items:center;gap:2px;flex:none}\n.dsh-dev-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:none;border-radius:4px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background-color 100ms ease,color 100ms ease}\n.dsh-dev-btn:hover{background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.16));color:var(--dsw-alias-label-primary)}\n.dsh-dev-btn.is-bordered{height:24px;min-width:24px;padding:0 4px;border:1px solid var(--dsw-alias-border-l2, rgba(128,128,128,0.22));border-radius:12px;background:var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.06))}\n.dsh-dev-btn.is-bordered:hover{border-color:var(--dsw-alias-border-l1, rgba(128,128,128,0.38));background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.14))}\n.dsh-dev-actions.is-big{gap:4px}\n.dsh-dev-btn.is-big{width:28px;height:28px;border-radius:6px}\n.dsh-dev-btn.is-big:hover{background:var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.10))}\n.dsh-dev-modal-overlay{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(2px)}\n.dsh-dev-modal{box-sizing:border-box;width:min(440px,calc(100vw - 32px));padding:16px;border-radius:12px;background:var(--dsw-alias-bg-layer-2,#1e1e1e);border:1px solid var(--dsw-alias-border-l2,rgba(128,128,128,0.2));box-shadow:var(--dsw-shadow-lv3, 0 10px 30px rgba(0,0,0,0.35));color:var(--dsw-alias-label-primary,#fff)}\n.dsh-dev-modal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}\n.dsh-dev-modal-title{font-size:14px;font-weight:600}\n.dsh-dev-modal-close{appearance:none;border:none;background:transparent;font-size:18px;line-height:1;color:var(--dsw-alias-label-tertiary,#888);cursor:pointer;padding:0 4px}\n.dsh-dev-modal-close:hover{color:var(--dsw-alias-label-primary,#fff)}\n.dsh-dev-modal-form{display:flex;flex-direction:column;gap:10px}\n.dsh-dev-modal-path{font-size:11px;font-family:ui-monospace,Menlo,Monaco,monospace;color:var(--dsw-alias-label-tertiary,#888);word-break:break-all;background:var(--dsw-alias-bg-layer-1,rgba(0,0,0,0.2));padding:4px 8px;border-radius:6px}\n.dsh-dev-modal-input{box-sizing:border-box;width:100%;height:34px;padding:0 10px;border-radius:8px;border:1px solid var(--dsw-alias-border-l2,rgba(128,128,128,0.3));background:var(--dsw-alias-bg-layer-1,rgba(255,255,255,0.05));color:inherit;font:inherit;font-size:13px;font-family:ui-monospace,Menlo,Monaco,monospace}\n.dsh-dev-modal-input:focus{outline:none;border-color:var(--dsw-alias-brand-primary,#2563eb)}\n.dsh-dev-modal-presets{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-top:2px}\n.dsh-dev-modal-preset-label{font-size:11px;color:var(--dsw-alias-label-tertiary,#888)}\n.dsh-dev-modal-preset-btn{appearance:none;border:1px solid var(--dsw-alias-border-l2,rgba(128,128,128,0.2));border-radius:6px;background:var(--dsw-alias-bg-layer-1,rgba(255,255,255,0.04));color:var(--dsw-alias-label-secondary,#bbb);font-size:11px;font-family:ui-monospace,Menlo,monospace;padding:2px 6px;cursor:pointer;transition:all 100ms ease}\n.dsh-dev-modal-preset-btn:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(255,255,255,0.1));color:var(--dsw-alias-label-primary,#fff);border-color:var(--dsw-alias-brand-primary,#2563eb)}\n.dsh-dev-modal-foot{display:flex;align-items:center;justify-content:flex-end;gap:8px;margin-top:6px}\n.dsh-dev-modal-btn{appearance:none;height:30px;padding:0 12px;border-radius:6px;font-size:12px;font-weight:500;cursor:pointer;border:none}\n.dsh-dev-modal-btn.is-cancel{background:transparent;color:var(--dsw-alias-label-secondary,#bbb)}\n.dsh-dev-modal-btn.is-cancel:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(255,255,255,0.08));color:var(--dsw-alias-label-primary,#fff)}\n.dsh-dev-modal-btn.is-primary{background:var(--dsw-alias-brand-primary,#2563eb);color:#fff}\n.dsh-dev-modal-btn.is-primary:hover{opacity:0.9}\n.dsh-dev-modal-btn.is-primary:disabled{opacity:0.6;cursor:default}\n.dsh-dev-modal-error{font-size:11px;line-height:1.5;color:var(--dsw-alias-state-error-primary,#f87171);background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.35);border-radius:6px;padding:4px 8px;word-break:break-all}\n\n/* 官方侧栏工作区筛选：树下方一行状态条，不占用区头的 36px 固定高度 */\n.dsh-wspath-sf-mount{display:contents}\n.dsh-wspath-sf-slot{display:flex;flex:none;align-items:center;min-height:0;margin-top:2px}\n.dsh-wspath-sf-slot.is-searching{display:none}\n.dsh-wspath-sf-btn{appearance:none;display:flex;align-items:center;gap:6px;width:100%;height:30px;min-width:0;padding:0 8px;margin:0;border:none;border-radius:var(--dsw-radius-sm,6px);background:transparent;color:var(--dsw-alias-label-tertiary);font:inherit;font-size:12px;line-height:18px;text-align:left;cursor:pointer;overflow:hidden;transition:background-color 120ms ease,color 120ms ease}\n.dsh-wspath-sf-btn:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(128,128,128,0.08));color:var(--dsw-alias-label-secondary)}\n.dsh-wspath-sf-btn:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}\n.dsh-wspath-sf-btn svg{flex:none}\n.dsh-wspath-sf-lead{display:inline-flex;align-items:center;gap:4px;flex:none;max-width:46%;color:var(--dsw-alias-label-secondary)}\n.dsh-wspath-sf-text{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500}\n.dsh-wspath-sf-count{flex:none;min-width:16px;padding:0 4px;border-radius:999px;background:var(--dsw-alias-interactive-bg-active,rgba(128,128,128,0.16));font-size:10px;line-height:15px;text-align:center;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-sf-hint{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-tertiary);font-size:11px}\n.dsh-wspath-sf-btn.is-all .dsh-wspath-sf-lead{color:var(--dsw-alias-label-primary)}\n.dsh-wspath-sf-hidden{display:none!important}\n\n/* 筛选菜单：与官方 Menu（dense）同一套底色、圆角与阴影 */\n.dsh-wspath-sf-menu{box-sizing:border-box;z-index:400;display:flex;flex-direction:column;gap:2px;padding:6px;border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-lg,10px);background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary);font-size:12px;line-height:18px}\n.dsh-wspath-sf-menu-title{padding:2px 8px 4px;font-size:11px;font-weight:600;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-sf-item{appearance:none;display:flex;align-items:center;gap:6px;width:100%;height:28px;padding:0 8px;border:none;border-radius:var(--dsw-radius-sm,6px);background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;text-align:left;cursor:pointer}\n.dsh-wspath-sf-item:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(128,128,128,0.08));color:var(--dsw-alias-label-primary)}\n.dsh-wspath-sf-item.is-checked{color:var(--dsw-alias-label-primary)}\n.dsh-wspath-sf-check{display:inline-flex;align-items:center;justify-content:center;width:14px;flex:none;color:var(--dsw-alias-state-business-primary,var(--dsw-alias-brand-primary))}\n.dsh-wspath-sf-label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dsh-wspath-sf-count{flex:none;min-width:18px;padding:0 5px;border-radius:999px;background:var(--dsw-alias-interactive-bg-active,rgba(128,128,128,0.16));font-size:10px;line-height:16px;text-align:center;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-sf-note{padding:0 8px 4px 28px;font-size:11px;line-height:16px;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-sf-sep{height:1px;margin:4px 2px;background:var(--dsw-alias-border-l2)}\n"
    if (typeof document !== 'undefined') {
      const id = 'dsh-workspace-path/ui.css'
      let tag = document.querySelector('style[data-plugin-css=' + JSON.stringify(id) + ']')
      if (!tag) {
        tag = document.createElement('style')
        tag.dataset.plugin = 'dsh-workspace-path'
        tag.dataset.pluginCss = id
        document.head.appendChild(tag)
      }
      tag.textContent = css
    }
/**
 * Display-only POSIX home abbreviation. Windows drive / UNC homes stay verbatim.
 * A missing, empty, or filesystem-root home leaves `path` unchanged.
 * @param {string} path
 * @param {string | undefined} home
 */
function abbreviateHomePath(path, home) {
  if (typeof path !== 'string' || path === '') return ''
  if (typeof home !== 'string' || home === '' || home === '/' || home === '\\') return path
  if (/^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\')) return path
  const normPath = path.replace(/\\/g, '/')
  const normHome = home.replace(/\\/g, '/').replace(/\/+$/, '')
  if (normHome === '' || normHome === '/') return path
  if (normPath === normHome) return '~'
  if (normPath.startsWith(`${normHome}/`)) return `~${normPath.slice(normHome.length)}`
  return path
}

/**
 * Which OS file manager `host.openPath` will raise on this Host.
 * Inferred from the Host home path only (the folder opens on the Host desktop,
 * never inside the DSH sidebar).
 * @param {string | undefined} home
 * @returns {'mac' | 'windows' | 'generic'}
 */
function hostFileManagerKind(home) {
  if (typeof home !== 'string' || home === '') return 'generic'
  if (/^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\')) return 'windows'
  if (home === '/Users' || home.startsWith('/Users/')) return 'mac'
  return 'generic'
}

/**
 * Workspaces that have a real directory, current session's workspace first.
 * @param {readonly { workspaceId: string, path?: string, sessionIds?: readonly string[] }[]} items
 * @param {string | undefined} currentSessionId
 */
function listCopyableWorkspaces(items, currentSessionId) {
  const rows = (items ?? []).filter((item) => typeof item.path === 'string' && item.path !== '')
  if (currentSessionId === undefined || currentSessionId === '') return rows
  const current = rows.find((item) => Array.isArray(item.sessionIds) && item.sessionIds.includes(currentSessionId))
  if (current === undefined) return rows
  return [current, ...rows.filter((item) => item.workspaceId !== current.workspaceId)]
}

/**
 * The Session the main view is retaining, when one is on screen. The Host's
 * session-list snapshot publishes no current-session field; `retainedBy.mainView`
 * is how DSH's own workspace UI resolves it. A Session-less new page has none.
 * @param {{ byId?: Record<string, { retainedBy?: { mainView?: number } }> } | null | undefined} list
 * @returns {string | undefined}
 */
function mainSessionId(list) {
  const byId = list?.byId
  if (byId === null || typeof byId !== 'object') return undefined
  for (const id of Object.keys(byId)) {
    if ((byId[id]?.retainedBy?.mainView ?? 0) > 0) return id
  }
  return undefined
}

/** Last path segment, accepting both separators. */
function workspaceBasename(path) {
  if (typeof path !== 'string' || path === '') return ''
  const trimmed = path.replace(/[/\\]+$/, '')
  const parts = trimmed.split(/[/\\]/)
  const base = parts[parts.length - 1]
  return base !== undefined && base !== '' ? base : trimmed
}

/**
 * Case-insensitive filter on title, absolute path, basename, and ~ display path.
 * @param {readonly { title?: string, path?: string }[]} rows
 * @param {string} query
 * @param {string | undefined} home
 */
function filterWorkspaces(rows, query, home) {
  const needle = String(query ?? '').trim().toLowerCase()
  if (needle === '') return rows
  return rows.filter((item) => {
    const title = String(item.title ?? '').toLowerCase()
    const path = String(item.path ?? '').toLowerCase()
    const base = workspaceBasename(item.path).toLowerCase()
    const short = abbreviateHomePath(item.path ?? '', home).toLowerCase()
    return title.includes(needle) || path.includes(needle) || base.includes(needle) || short.includes(needle)
  })
}

/** @param {string | undefined} text */
function dateStampFromText(text) {
  const raw = String(text ?? '').trim()
  const match = raw.match(/^(?:\([^)]*\)\s*)?(\d{4}-\d{1,2}-\d{1,2})$/)
  return match ? normalizeDayStamp(match[1]) : ''
}

/** @param {string} stamp */
function normalizeDayStamp(stamp) {
  const match = String(stamp ?? '').match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/)
  if (!match) return ''
  return `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`
}

/** @param {Date} [now] */
function todayStamp(now = new Date()) {
  return normalizeDayStamp(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
}

/** @param {{ title?: string, path?: string } | null | undefined} item */
function isDayWorkspace(item) {
  if (dateStampFromText(item?.title)) return true
  if (dateStampFromText(workspaceBasename(item?.path))) return true
  const norm = String(item?.path ?? '').replace(/\\/g, '/')
  return /\/days\/\d{4}-\d{1,2}-\d{1,2}\/?$/.test(norm)
}

/** @param {{ title?: string, path?: string } | null | undefined} item */
function dayStampOf(item) {
  return dateStampFromText(item?.title) || dateStampFromText(workspaceBasename(item?.path))
}

/**
 * @param {readonly { title?: string, path?: string }[]} items
 * @returns {{ projects: typeof items, days: typeof items }}
 */
function splitWorkspaces(items) {
  const projects = []
  const days = []
  for (const item of items ?? []) {
    if (isDayWorkspace(item)) days.push(item)
    else projects.push(item)
  }
  return { projects, days }
}

/**
 * Today first, then newest date first. Unparseable day rows sink.
 * @param {readonly { title?: string, path?: string }[]} days
 * @param {string} [today]
 */
function sortDayWorkspaces(days, today = todayStamp()) {
  return [...(days ?? [])].sort((a, b) => {
    const aStamp = dayStampOf(a)
    const bStamp = dayStampOf(b)
    const aToday = aStamp === today ? 0 : 1
    const bToday = bStamp === today ? 0 : 1
    if (aToday !== bToday) return aToday - bToday
    if (aStamp && bStamp && aStamp !== bStamp) return aStamp < bStamp ? 1 : -1
    if (aStamp && !bStamp) return -1
    if (!aStamp && bStamp) return 1
    return 0
  })
}

/**
 * Pin `currentId` to the front when it is already in `rows`. Day workspaces
 * must not be injected into a project list this way.
 * @param {readonly { workspaceId?: string }[]} rows
 * @param {string | undefined} currentId
 */
function pinCurrentWorkspace(rows, currentId) {
  if (!currentId) return [...(rows ?? [])]
  const current = (rows ?? []).find((item) => item.workspaceId === currentId)
  if (current === undefined) return [...(rows ?? [])]
  return [current, ...(rows ?? []).filter((item) => item.workspaceId !== current.workspaceId)]
}

function readUsage(usageMap, ws) {
  const val = usageMap?.[ws?.workspaceId] ?? usageMap?.[ws?.path]
  if (typeof val === 'number' && Number.isFinite(val)) return { lastUsedAt: val, count: 1 }
  if (val && typeof val === 'object') return val
  return undefined
}

/**
 * Last-used instant of one workspace: its newest session activity or manual
 * interaction (copy, dev, git, terminal, reveal, select), falling back to
 * the workspace's own mutation time for a workspace with no activity.
 * @param {{ workspaceId?: string, sessionIds?: readonly string[], updatedAt?: string }} ws
 * @param {Record<string, { updatedAt?: number }> | undefined} sessionsById
 * @param {Record<string, { lastUsedAt?: number, count?: number } | number> | undefined} usageMap
 */
function lastUsedAt(ws, sessionsById, usageMap) {
  let latest = 0
  for (const id of ws?.sessionIds ?? []) {
    const at = sessionsById?.[id]?.updatedAt
    if (typeof at === 'number' && Number.isFinite(at) && at > latest) latest = at
  }
  const explicit = readUsage(usageMap, ws)?.lastUsedAt
  if (typeof explicit === 'number' && Number.isFinite(explicit) && explicit > latest) latest = explicit
  if (latest > 0) return latest
  const touched = Date.parse(String(ws?.updatedAt ?? ''))
  return Number.isFinite(touched) ? touched : 0
}

/**
 * Cumulative usage count: explicit manual interactions plus existing session count.
 * @param {{ workspaceId?: string, sessionIds?: readonly string[] }} ws
 * @param {Record<string, { lastUsedAt?: number, count?: number } | number> | undefined} usageMap
 */
function usageCount(ws, usageMap) {
  const manual = readUsage(usageMap, ws)?.count
  const sessionCount = Array.isArray(ws?.sessionIds) ? ws.sessionIds.length : 0
  return (typeof manual === 'number' && Number.isFinite(manual) ? manual : 0) + sessionCount
}

/**
 * Most recently / frequently used first; never-used rows keep their host order.
 * The sort is stable, so equal timestamps and counts preserve the registry order.
 * @param {readonly object[]} rows
 * @param {Record<string, { updatedAt?: number }> | undefined} sessionsById
 * @param {Record<string, { lastUsedAt?: number, count?: number } | number> | undefined} usageMap
 */
function sortByRecentUse(rows, sessionsById, usageMap) {
  return (rows ?? [])
    .map((row, index) => ({
      row,
      index,
      at: lastUsedAt(row, sessionsById, usageMap),
      count: usageCount(row, usageMap),
    }))
    .sort((a, b) => (b.at - a.at) || (b.count - a.count) || (a.index - b.index))
    .map((entry) => entry.row)
}

/**
 * Project list order: most recently / frequently used first, with the current
 * workspace leading only when it ties the newest row.
 * @param {readonly object[]} rows
 * @param {string | undefined} currentId
 * @param {Record<string, { updatedAt?: number }> | undefined} sessionsById
 * @param {Record<string, { lastUsedAt?: number, count?: number } | number> | undefined} usageMap
 */
function orderProjectsByRecentUse(rows, currentId, sessionsById, usageMap) {
  const sorted = sortByRecentUse(rows, sessionsById, usageMap)
  if (!currentId || sorted.length === 0) return sorted
  const current = sorted.find((item) => item.workspaceId === currentId)
  if (current === undefined) return sorted
  const curAt = lastUsedAt(current, sessionsById, usageMap)
  const topAt = lastUsedAt(sorted[0], sessionsById, usageMap)
  if (curAt !== topAt) return sorted
  const curCount = usageCount(current, usageMap)
  const topCount = usageCount(sorted[0], usageMap)
  if (curCount < topCount) return sorted
  return [current, ...sorted.filter((item) => item.workspaceId !== currentId)]
}

/**
 * Display label of one git summary row: '' for non-repositories, '✓' for a
 * clean tree, '● n' for n pending changes, '?' when the probe failed (-1).
 * @param {{ isRepo?: boolean, changed?: number } | null | undefined} info
 */
function gitStatusLabel(info) {
  if (!info || info.isRepo !== true) return ''
  if (info.changed === -1) return '?'
  return info.changed > 0 ? `● ${info.changed}` : '✓'
}

/**
 * Whether a git summary row reads as "has pending changes" (an unknown probe
 * result counts as pending so the marker never claims a false clean).
 * @param {{ isRepo?: boolean, changed?: number } | null | undefined} info
 */
function isGitDirty(info) {
  return Boolean(info && info.isRepo === true && info.changed !== 0)
}

/**
 * Default view is projects only, most recently used first. A non-empty query
 * searches both kinds so a date can be typed without opening the day list.
 * `view: 'days'` is the extra step.
 * @param {{ items?: readonly object[], query?: string, home?: string, view?: 'projects' | 'days', currentId?: string, now?: Date, sessionsById?: Record<string, { updatedAt?: number }> }} opts
 */
function pickerModel(opts = {}) {
  const items = (opts.items ?? []).filter((item) => typeof item.path === 'string' && item.path !== '')
  const { projects, days } = splitWorkspaces(items)
  const today = todayStamp(opts.now)
  const sortedDays = sortDayWorkspaces(days, today)
  const view = opts.view === 'days' ? 'days' : 'projects'
  const searching = String(opts.query ?? '').trim() !== ''
  const mark = (kind) => (row) => ({ ...row, kind, isToday: dayStampOf(row) === today })
  if (view === 'days') {
    const rows = filterWorkspaces(sortedDays, opts.query, opts.home).map(mark('day'))
    return { view, searching, rows: pinCurrentWorkspace(rows, opts.currentId), dayCount: sortedDays.length, projectCount: projects.length, today }
  }
  if (searching) {
    const projectHits = filterWorkspaces(projects, opts.query, opts.home).map(mark('project'))
    const dayHits = filterWorkspaces(sortedDays, opts.query, opts.home).map(mark('day'))
    return { view, searching: true, rows: [...projectHits, ...dayHits], dayCount: sortedDays.length, projectCount: projects.length, today }
  }
  return {
    view,
    searching: false,
    rows: orderProjectsByRecentUse(projects, opts.currentId, opts.sessionsById, opts.usageMap).map(mark('project')),
    dayCount: sortedDays.length,
    projectCount: projects.length,
    today,
  }
}


/**
 * Workspace that owns the session currently shown in the main view, or `''`.
 * Ownership comes from `sessionIds`; a session without recorded membership
 * falls back to its `cwd`, so a freshly created folder still resolves.
 * @param {readonly { workspaceId?: string, path?: string, sessionIds?: readonly string[] }[]} items
 * @param {Record<string, { id?: string, retainedBy?: Record<string, number>, cwd?: string }>} [sessionsById]
 */
function currentWorkspaceId(items, sessionsById) {
  const list = items ?? []
  const byId = sessionsById ?? {}
  const current = Object.values(byId).find((row) => ((row?.retainedBy?.mainView) ?? 0) > 0)
  if (current === undefined || current === null) return ''
  const owned = list.find((item) => Array.isArray(item.sessionIds) && current.id !== undefined && item.sessionIds.includes(current.id))
  if (owned !== undefined) return owned.workspaceId ?? ''
  if (typeof current.cwd === 'string' && current.cwd !== '') {
    const byPath = list.find((item) => item.path === current.cwd)
    if (byPath !== undefined) return byPath.workspaceId ?? ''
  }
  return ''
}

/**
 * Which day workspaces the official sidebar should hide right now.
 *
 * `mode: 'projects'` hides dated folders except today's and the workspace of
 * the open session, so the list never loses the row the user is looking at.
 * `mode: 'all'` hides nothing. The id set is what the DOM adapter toggles; the
 * counts drive the filter entry and its menu copy.
 * @param {readonly { workspaceId?: string, title?: string, path?: string, sessionIds?: readonly string[] }[]} items
 * @param {{ mode?: 'projects' | 'all', currentId?: string, now?: Date }} [opts]
 */
function sidebarFilterModel(items, opts = {}) {
  const all = (items ?? []).filter((item) => typeof item.path === 'string' && item.path !== '')
  const { projects, days } = splitWorkspaces(all)
  const today = todayStamp(opts.now)
  const mode = opts.mode === 'all' ? 'all' : 'projects'
  const currentId = typeof opts.currentId === 'string' ? opts.currentId : ''
  const hidden = new Set()
  if (mode === 'projects') {
    for (const day of days) {
      if (day.workspaceId === currentId) continue
      if (dayStampOf(day) === today) continue
      hidden.add(day.workspaceId)
    }
  }
  return {
    mode,
    today,
    hidden,
    hiddenCount: hidden.size,
    dayCount: days.length,
    projectCount: projects.length,
    currentId,
  }
}

    // Workspace usage tracking (clicks on copy, dev, git, terminal, reveal, select)
    const WS_USAGE_KEY = 'dsh.ws-usage'
    const usageListeners = new Set()

    function getWorkspaceUsageMap() {
      if (typeof localStorage === 'undefined') return {}
      try {
        const raw = localStorage.getItem(WS_USAGE_KEY)
        if (!raw) return {}
        const parsed = JSON.parse(raw)
        return (parsed && typeof parsed === 'object') ? parsed : {}
      } catch {
        return {}
      }
    }

    function recordWorkspaceUse(wsOrPath, now = Date.now()) {
      if (!wsOrPath || typeof localStorage === 'undefined') return undefined
      const path = typeof wsOrPath === 'string' ? wsOrPath : wsOrPath.path
      const id = typeof wsOrPath === 'object' ? wsOrPath.workspaceId : undefined
      const map = getWorkspaceUsageMap()
      const prev = (id && map[id]) || (path && map[path]) || {}
      const next = {
        lastUsedAt: typeof now === 'number' ? now : Date.now(),
        count: (typeof prev.count === 'number' ? prev.count : 0) + 1,
      }
      if (path) map[path] = next
      if (id) map[id] = next
      try {
        localStorage.setItem(WS_USAGE_KEY, JSON.stringify(map))
      } catch {}
      for (const fn of usageListeners) {
        try { fn(map) } catch {}
      }
      return next
    }

    function subscribeWorkspaceUsage(listener) {
      if (typeof listener !== 'function') return () => {}
      usageListeners.add(listener)
      return () => usageListeners.delete(listener)
    }

    function useWorkspaceUsageSnapshot(open) {
      const [snapshot, setSnapshot] = React.useState(getWorkspaceUsageMap)
      React.useEffect(() => { if (open) setSnapshot(getWorkspaceUsageMap()) }, [open])
      return snapshot
    }

    const copy = {
      zh: { trigger: '工作区中心 (点击切换)', search: '搜索项目 (也可搜日期)...', empty: '暂无项目工作区', emptyDays: '暂无按天工作区', noMatches: '无匹配工作区', current: '当前工作区', copied: '已复制路径', copyFailed: '复制失败', copyBtn: '复制绝对路径', terminal: '在终端打开', openMac: '在访达中显示', openWindows: '在资源管理器中显示', openGeneric: '在文件管理器中显示', newSessionInWs: '在此工作区新建会话', clickActionHint: '点击查看快捷操作', sessionTitle: '当前会话', sessionIdTitle: '会话唯一标识 (Session ID)', copySessionId: '复制会话 ID', copiedSessionId: '已复制会话 ID', openInNewWindow: '在系统浏览器中打开', daysEntry: '按天工作区', daysBack: '返回项目', today: '今天', dayKind: '按天', projects: '项目', addWorkspace: '添加工作区…', pickerUnavailable: '当前宿主没有可用的目录选择器', gitClean: '工作区干净', gitDirty: '{n} 个未提交改动', gitUnknown: 'git 状态未知', openWeb: 'Web', openWebTip: '在系统默认浏览器中打开当前会话的 Harness 界面', openWebFailed: '失败' },
      en: { trigger: 'Workspace Hub (Click to Switch)', search: 'Search projects (dates too)...', empty: 'No project workspaces', emptyDays: 'No day workspaces', noMatches: 'No matching workspaces', current: 'Current workspace', copied: 'Path copied', copyFailed: 'Copy failed', copyBtn: 'Copy absolute path', terminal: 'Open in Terminal', openMac: 'Show in Finder', openWindows: 'Show in File Explorer', openGeneric: 'Show in file manager', newSessionInWs: 'New session here', clickActionHint: 'Click for actions', sessionTitle: 'Current Session', sessionIdTitle: 'Session Identifier (Session ID)', copySessionId: 'Copy Session ID', copiedSessionId: 'Session ID Copied', openInNewWindow: 'Open in system browser', daysEntry: 'Day workspaces', daysBack: 'Back to projects', today: 'Today', dayKind: 'Day', projects: 'Projects', addWorkspace: 'Add workspace…', pickerUnavailable: 'No directory picker is available on this host', gitClean: 'Clean working tree', gitDirty: '{n} uncommitted change(s)', gitUnknown: 'git status unavailable', openWeb: 'Web', openWebTip: 'Open this session in the system default browser', openWebFailed: 'Failed' },
    }
    const locale = () => (typeof document !== 'undefined' && String(document.documentElement.lang).toLowerCase().startsWith('en')) ? copy.en : copy.zh
    function hostRevealLabel(t, home) {
      const kind = hostFileManagerKind(home)
      return kind === 'mac' ? t.openMac : (kind === 'windows' ? t.openWindows : t.openGeneric)
    }
    async function writeClipboard(text) {
      try { if (navigator?.clipboard?.writeText) { await navigator.clipboard.writeText(text); return true } } catch {}
      return false
    }
    function useSnapshot(store) {
      const [, bump] = React.useState(0)
      React.useEffect(() => store?.subscribe?.(() => bump((n) => n + 1)), [store])
      return store?.getSnapshot?.()
    }
    // 本插件通过 Portal 挂到 body 的浮层：它们不在触发器的 DOM 子树里。
    // 点它们内部不算“点外部”，否则 pointerdown 会先关掉面板、把浮层一起卸载，
    // 目标按钮永远收不到 click（保存并启动无效、Hero 打开方式菜单点不动都源于此）。
    const PORTAL_SURFACES = '.dsh-dev-modal-overlay, .dsh-hero-app-menu, .dsh-wspath-sid-popover, .dsh-dev-menu'
    // 工作区列表的 git 概览：开面板时批量拉取（5s 缓存），失败静默，绝不阻塞列表渲染。
    const GIT_SUMMARY_TTL = 5000
    const gitSummaryCache = new Map()
    async function fetchGitSummaries(connection, paths) {
      const now = Date.now(), result = {}, stale = []
      for (const p of paths) {
        const hit = gitSummaryCache.get(p)
        if (hit !== undefined && now - hit.at < GIT_SUMMARY_TTL) { if (hit.info) result[p] = hit.info; continue }
        stale.push(p)
      }
      if (stale.length === 0 || typeof connection?.rpc?.call !== 'function') return result
      let res
      try { res = await connection.rpc.call('/dsh-workspace-path', 'git-summary', { paths: stale }) } catch { return result }
      if (!res || res.ok === false) return result
      const summaries = (res.value && res.value.summaries) || {}
      for (const p of stale) {
        const info = summaries[p] || null
        gitSummaryCache.set(p, { at: Date.now(), info })
        if (info) result[p] = info
      }
      return result
    }
    function gitTooltip(t, info) {
      if (!info || info.isRepo !== true) return ''
      if (info.changed === -1) return t.gitUnknown
      if (info.changed > 0) return t.gitDirty.replace('{n}', String(info.changed))
      return t.gitClean
    }
    function usePopover(open, setOpen, place, triggerRef, panelClass) {
      React.useEffect(() => {
        if (!open) return undefined
        place()
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
        const onPtr = (e) => {
          if (triggerRef.current?.contains(e.target)) return
          if (e.target.closest?.(panelClass)) return
          if (e.target.closest?.(PORTAL_SURFACES)) return
          setOpen(false)
        }
        window.addEventListener('resize', place)
        document.addEventListener('keydown', onKey)
        document.addEventListener('pointerdown', onPtr)
        return () => { window.removeEventListener('resize', place); document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onPtr) }
      }, [open, place])
    }
    function usePanelReset(open, extras) {
      const [query, setQuery] = React.useState(''), [view, setView] = React.useState('projects')
      const [status, setStatus] = React.useState(''), [error, setError] = React.useState(false)
      React.useEffect(() => {
        if (open) return undefined
        setQuery(''); setView('projects'); setStatus(''); setError(false)
        extras?.()
      }, [open])
      return { query, setQuery, view, setView, status, setStatus, error, setError }
    }
    const svg = (size, children) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, children)
    const IconFolder = ({ size = 18 }) => svg(size, [h('path', { key: 'a', d: 'M2.5 4.75A1.25 1.25 0 0 1 3.75 3.5h2.2L7.2 5h5.05A1.25 1.25 0 0 1 13.5 6.25v5.5A1.25 1.25 0 0 1 12.25 13h-8.5A1.25 1.25 0 0 1 2.5 11.75z', stroke: 'currentColor', strokeWidth: 1.25 }), h('path', { key: 'b', d: 'M6 9.2h4M6 11h2.5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round' })])
    const IconCopy = ({ size = 14 }) => svg(size, [h('rect', { key: 'a', x: 5, y: 5, width: 8, height: 9, rx: 1.5, stroke: 'currentColor', strokeWidth: 1.25 }), h('path', { key: 'b', d: 'M3.5 11H3a1 1 0 0 1-1-1V3.5A1.5 1.5 0 0 1 3.5 2h6.5a1 1 0 0 1 1 1v.5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round' })])
    const IconTerminal = ({ size = 14 }) => svg(size, h('path', { d: 'M3 4.5l4 3.5-4 3.5M8 11.5h5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconOpen = ({ size = 14 }) => svg(size, h('path', { d: 'M6.5 3.5H4.25A1.75 1.75 0 0 0 2.5 5.25v6.5A1.75 1.75 0 0 0 4.25 13.5h6.5a1.75 1.75 0 0 0 1.75-1.75V9.5M9 3.5h3.5V7M12.5 3.5 8 8', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconPlus = ({ size = 14 }) => svg(size, h('path', { d: 'M8 3.5v9M3.5 8h9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }))
    const IconChevronDown = ({ size = 12, className = '' }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', className }, h('path', { d: 'M4 6l4 4 4-4', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconChevronLeft = ({ size = 12 }) => svg(size, h('path', { d: 'M10 4L6 8l4 4', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconChat = ({ size = 13 }) => svg(size, h('path', { d: 'M2.5 3.5A1.5 1.5 0 0 1 4 2h8a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 12 11H5.5L2.8 13.7A.5.5 0 0 1 2 13.3V3.5z', stroke: 'currentColor', strokeWidth: 1.25, strokeLinejoin: 'round' }))
    const IconCheck = ({ size = 13 }) => svg(size, h('path', { d: 'M3 8.5l3.5 3.5 6.5-7', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconSpinner = ({ size = 14 }) => svg(size, h('circle', { cx: 8, cy: 8, r: 5.2, stroke: 'currentColor', strokeWidth: 1.4, strokeDasharray: '9 7', strokeLinecap: 'round' }))
    const IconFilter = ({ size = 12 }) => svg(size, h('path', { d: 'M2.5 4h11M4.5 8h7M6.5 12h3', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' }))

    function WorkspaceRow({ t, ws, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, revealLabel, connection, gitInfo, actions }) {
      const isCur = ws.workspaceId === currentId, display = abbreviateHomePath(ws.path, home)
      const badges = []
      if (ws.isToday) badges.push(h('span', { key: 'today', className: 'dsh-wspath-badge' }, t.today))
      if (isCur) badges.push(h('span', { key: 'cur', className: 'dsh-wspath-badge' }, t.current))
      if (ws.kind === 'day' && !ws.isToday) badges.push(h('span', { key: 'kind', className: 'dsh-wspath-kind' }, t.dayKind))
      const gitLabel = gitStatusLabel(gitInfo)
      if (gitLabel) badges.push(h('span', { key: 'git', className: 'dsh-wspath-git' + (isGitDirty(gitInfo) ? ' is-dirty' : ''), title: gitTooltip(t, gitInfo) }, gitLabel))
      // `variant` names the carrier; `actions` decides whether the row can act on
      // it. The Hero picker asks for them too, so a project row behaves the same
      // in both places (Git / dev command / reveal).
      const rowActions = canOpen && actions !== false
      return h('div', { className: 'dsh-wspath-row' + (isCur ? ' is-current' : '') },
        h('button', { type: 'button', className: 'dsh-wspath-item', title: ws.path, onClick: () => onSelect(ws) },
          h('span', { className: 'dsh-wspath-title' }, h('span', { className: 'dsh-wspath-name' }, ws.title || ws.path), badges),
          variant === 'hub' || ws.kind === 'project' ? h('span', { className: 'dsh-wspath-path' }, display) : null,
        ),
       rowActions ? h('div', { className: 'dsh-wspath-actions' },
         h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: t.copyBtn, onClick: (e) => { e.stopPropagation(); onCopy(ws) } }, h(IconCopy)),
          ws.path ? h(DevActionButtons, { connection, wsPath: ws.path, size: 12 }) : null,
          h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: t.terminal, onClick: (e) => { e.stopPropagation(); onTerminal(ws) } }, h(IconTerminal)),
          h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: revealLabel, onClick: (e) => { e.stopPropagation(); onOpen(ws) } }, h(IconOpen)),
        ) : null,
      )
    }

    function PathPanel(props) {
      const { t, model, query, onQuery, inputRef, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, onAddWorkspace, canAddWorkspace, adding, status, error, revealLabel, onOpenDays, onBack, connection, actions } = props
      const rows = model.rows, searching = model.searching, view = model.view
      const [gitMap, setGitMap] = React.useState(null)
      // 打开工作区中心时拉一次 git 概览（只查项目行；按天目录不查）。查询在后台跑，
      // 结果回来前列表照常显示，行只是暂时没有 git 标记。
      React.useEffect(() => {
        if (actions === false || !canOpen || typeof connection?.rpc?.call !== 'function') return undefined
        const paths = []
        for (const ws of model.rows) {
          if (ws.kind === 'project' && typeof ws.path === 'string' && ws.path !== '') paths.push(ws.path)
        }
        if (paths.length === 0) return undefined
        let alive = true
        fetchGitSummaries(connection, paths).then((map) => { if (alive) setGitMap(map) }).catch(() => {})
        return () => { alive = false }
      }, [actions, canOpen, connection])
      const projectRows = searching ? rows.filter((ws) => ws.kind === 'project') : (view === 'projects' ? rows : [])
      const dayRows = searching ? rows.filter((ws) => ws.kind === 'day') : (view === 'days' ? rows : [])
      const emptyText = query ? t.noMatches : (view === 'days' ? t.emptyDays : t.empty)
      const renderGroup = (label, list) => list.length === 0 ? null : h(React.Fragment, null,
        searching ? h('div', { className: 'dsh-wspath-section' }, label) : null,
        list.map((ws) => h(WorkspaceRow, { key: ws.workspaceId, t, ws, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, revealLabel, connection, actions, gitInfo: gitMap ? gitMap[ws.path] : undefined })),
      )
      // 两处「＋」都走官方那条路：打开目录选择器（原生选择框自带新建文件夹）→ 采纳并打开。
      const plusTitle = t.addWorkspace
      const plusClick = onAddWorkspace
      const showPlus = variant === 'hub' || (variant === 'picker' && canAddWorkspace)
      return h(React.Fragment, null,
        h('div', { className: 'dsh-wspath-search-row' },
          h('input', { ref: inputRef, type: 'search', value: query, placeholder: t.search, 'aria-label': t.search, onChange: (e) => onQuery(e.target.value), onKeyDown: (e) => { if (e.key === 'Enter' && rows[0]) { e.preventDefault(); onSelect(rows[0]) } } }),
          showPlus ? h('button', { type: 'button', className: 'dsh-wspath-add-btn', title: plusTitle, 'aria-label': plusTitle, disabled: Boolean(adding) || !canAddWorkspace, onClick: plusClick }, adding ? h(IconSpinner) : h(IconPlus)) : null,
        ),
        view === 'days' ? h('button', { type: 'button', className: 'dsh-wspath-back', onClick: onBack }, h(IconChevronLeft), t.daysBack) : null,
        rows.length === 0 ? h('p', { className: 'dsh-wspath-empty' }, emptyText) : h('div', { className: 'dsh-wspath-list' },
          view === 'days' ? renderGroup(t.daysEntry, dayRows) : h(React.Fragment, null, renderGroup(t.projects, projectRows), renderGroup(t.daysEntry, dayRows)),
        ),
        view === 'projects' && !searching && model.dayCount > 0 ? h('button', { type: 'button', className: 'dsh-wspath-days-btn', onClick: onOpenDays }, h('span', null, t.daysEntry), h('span', null, String(model.dayCount))) : null,
        status ? h('div', { className: 'dsh-wspath-status' + (error ? ' is-error' : '') }, status) : null,
      )
    }

    function PathButton(props) {
      const { wide, workspaces, sessions, uiWorkspace, getUiWorkspace, connection, startSession, controllerRef } = props
      const t = locale(), inputRef = React.useRef(null), buttonRef = React.useRef(null), copiedTimer = React.useRef(null)
      const [open, setOpen] = React.useState(false)
      const [adding, setAdding] = React.useState(false)
      const [coords, setCoords] = React.useState(null)
      const panel = usePanelReset(open)
      const wsSnap = useSnapshot(workspaces?.list), sesSnap = useSnapshot(sessions?.list), host = useSnapshot(connection?.hostDescription)
      const items = wsSnap?.items || [], currentId = wsSnap?.current, home = host?.home
      const sessionsById = sesSnap?.byId
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))
      const currentWs = items.find((it) => it.workspaceId === currentId)
      const usageMap = useWorkspaceUsageSnapshot(open)
      const model = pickerModel({ items, query: panel.query, home, view: panel.view, currentId, sessionsById, usageMap })
      const place = React.useCallback(() => {
        const btn = buttonRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = wide === false ? r.right + 8 : r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), bottom: window.innerHeight - r.top + 8, width: w })
      }, [wide])
      usePopover(open, setOpen, place, buttonRef, '.dsh-wspath-panel')
      React.useEffect(() => { if (open) inputRef.current?.focus() }, [open])
      const flash = (msg, isErr = false) => {
        panel.setError(isErr); panel.setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => panel.setStatus(''), 1500)
      }
      const onSelect = (ws) => { recordWorkspaceUse(ws); setOpen(false); if (typeof startSession === 'function') startSession(ws.workspaceId) }
      const onCopy = async (ws) => { recordWorkspaceUse(ws); const ok = await writeClipboard(ws.path); flash(ok ? t.copied : t.copyFailed, !ok) }
      const onOpen = (ws) => { recordWorkspaceUse(ws); if (canOpen) connection?.rpc?.call('/dsh-workspace-path', 'reveal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true)) }
      const onTerminal = (ws) => { recordWorkspaceUse(ws); if (canOpen) connection?.rpc?.call('/dsh-workspace-path', 'terminal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true)) }
      const onAddWorkspace = async () => {
        if (adding) return
        setAdding(true)
        try {
          const added = await pickAndAddWorkspace({ uiWorkspace, getUiWorkspace, workspaces, startSession })
          if (added) setOpen(false)
        } catch (e) { flash(e?.message || String(e), true) } finally { setAdding(false) }
      }
      const node = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-panel', style: { position: 'fixed', left: coords.left + 'px', bottom: coords.bottom + 'px', width: coords.width + 'px' } },
              h(PathPanel, { t, model, query: panel.query, onQuery: panel.setQuery, inputRef, currentId: currentWs?.workspaceId, home, variant: 'hub', canOpen, onSelect, onCopy, onOpen, onTerminal, canAddWorkspace: typeof (getUiWorkspace?.() ?? uiWorkspace)?.pickDirectory === 'function' && typeof workspaces?.create === 'function', onAddWorkspace, adding, status: panel.status, error: panel.error, revealLabel: hostRevealLabel(t, home), onOpenDays: () => { panel.setQuery(''); panel.setView('days') }, onBack: () => { panel.setQuery(''); panel.setView('projects') }, connection }),
            ), document.body) : null
      // 侧栏筛选菜单里的「查看按天工作区」：从外部打开面板的第二页。
      React.useEffect(() => {
        if (!controllerRef) return undefined
        controllerRef.current = {
          openDays: () => { panel.setQuery(''); panel.setView('days'); setOpen(true) },
        }
        return () => {
          if (controllerRef.current?.openDays) controllerRef.current = null
        }
      }, [controllerRef, panel.setQuery, panel.setView])
      return h('div', { className: wide === false ? 'dsh-wspath' : 'dsh-wspath dsh-wspath-wide' },
        h('button', { ref: buttonRef, type: 'button', className: 'dsh-wspath-btn' + (open ? ' is-open' : ''), title: t.trigger, 'aria-label': t.trigger, onClick: () => { setOpen((v) => !v); panel.setStatus('') } }, h(IconFolder, { size: 18 })),
        node,
      )
    }

    // 与官方「添加工作区」同一条路：先由 DSH 的目录选择器选目录（原生选择框
    // 自带「新建文件夹」，内置浏览对话框也有），再登记为工作区并打开新会话。
    // 插件只提供触发点，不自己拼目录创建 UI。
    async function pickAndAddWorkspace({ uiWorkspace, getUiWorkspace, workspaces, startSession }) {
      // uiWorkspace 由 ctx.inject 晚到，组件首次渲染时可能还是 undefined；
      // 这里以 getter 为准，取点击当下最新的服务。
      const ui = (typeof getUiWorkspace === 'function' ? getUiWorkspace() : undefined) || uiWorkspace
      if (typeof ui?.pickDirectory !== 'function') {
        throw new Error(locale().pickerUnavailable)
      }
      const pickedPath = await ui.pickDirectory()
      if (!pickedPath) return null
      if (typeof workspaces?.create !== 'function') throw new Error(locale().pickerUnavailable)
      const created = await workspaces.create({ path: pickedPath })
      const workspaceId = created?.workspaceId ?? created?.workspace?.workspaceId
      if (!workspaceId) return null
      if (typeof startSession === 'function') startSession(workspaceId)
      return { workspaceId, path: pickedPath }
    }

    // Common Dev & Git Action Tools
    const IconGit = ({ size = 13, className = '' }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', className },
      h('path', { d: 'M14.6 6.8l-5.4-5.4a1.6 1.6 0 0 0-2.3 0L5.7 2.6l2.1 2.1c.4-.2.9-.2 1.3 0 .7.4 1 1.2.7 2l2 2c.7-.2 1.6.1 2 .7.6.7.5 1.7-.1 2.3-.6.6-1.6.7-2.3.1-.5-.4-.7-1.2-.5-1.9l-1.9-1.9v3.7c.3.2.6.5.7.9.4.8 0 1.7-.8 2.1-.8.4-1.7 0-2.1-.8-.4-.8 0-1.7.8-2.1.3-.2.6-.2.9-.2V6.6c-.3 0-.6-.1-.9-.3-.5-.4-.7-1.1-.5-1.7L5.5 2.4 1.4 6.5a1.6 1.6 0 0 0 0 2.3l5.4 5.4a1.6 1.6 0 0 0 2.3 0l5.5-5.5a1.6 1.6 0 0 0 0-2.3z', fill: '#f05032' }),
    )

    const IconRocket = ({ size = 13, className = '' }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', className },
      h('path', { d: 'M9.5 1.5c2.5.5 5 3 5 5 0 2.5-2 4.5-4 5.5l-1.5 2.5-1.5-1.5 1-1.5c-1-2-1-3-1-3s-1 0-3-1l-1.5 1-1.5-1.5 2.5-1.5c1-2 3-4 5.5-4z', stroke: '#10b981', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }),
      h('circle', { cx: '10.5', cy: '5.5', r: '1.2', fill: '#10b981' }),
      h('path', { d: 'M3 13s.5-1.5 2-2', stroke: '#f59e0b', strokeWidth: 1.25, strokeLinecap: 'round' }),
    )

    function getWsDevCmd(wsPath) {
      if (!wsPath || typeof localStorage === 'undefined') return ''
      return localStorage.getItem('dsh.ws-dev-cmd:' + wsPath) || ''
    }

    function setWsDevCmd(wsPath, cmd) {
      if (!wsPath || typeof localStorage === 'undefined') return
      if (cmd) localStorage.setItem('dsh.ws-dev-cmd:' + wsPath, cmd)
      else localStorage.removeItem('dsh.ws-dev-cmd:' + wsPath)
    }

    function runWorkspaceCommand(connection, path, cmd) {
      if (!connection?.rpc || !path || !cmd) return Promise.resolve(false)
      return connection.rpc.call('/dsh-workspace-path', 'run-command', { path, cmd })
    }

    // Git 按钮默认动作（全局偏好）：'sidebar' 打开 Better Sidebar 的「文件变动」页，
    // 'terminal' 保持旧行为（外部终端跑 git status）。右键菜单里可随时切换。
    const GIT_ACTION_KEY = 'dsh.git-action'
    function getGitAction() {
      if (typeof localStorage === 'undefined') return 'sidebar'
      return localStorage.getItem(GIT_ACTION_KEY) === 'terminal' ? 'terminal' : 'sidebar'
    }
    function setGitAction(action) {
      if (typeof localStorage === 'undefined') return
      try { localStorage.setItem(GIT_ACTION_KEY, action === 'terminal' ? 'terminal' : 'sidebar') } catch {}
    }

    /**
     * 在 Better Sidebar 打开当前会话的「文件变动」页。
     * 服务缺失、tab 被禁用或抛错时返回 false，调用方回退外部终端。
     */
    function openChangesPage(getBetterSidebar, sessionId) {
      const sb = typeof getBetterSidebar === 'function' ? getBetterSidebar() : undefined
      if (!sb || typeof sb.openTab !== 'function') return false
      if (typeof sb.isTabEnabled === 'function' && sb.isTabEnabled('git') === false) return false
      // Without a seat session the service's openTab is a strict no-op, which
      // would swallow the click (the caller would hear "opened" while nothing
      // appeared). Fall back to the external terminal in that case.
      if (sessionId === undefined) {
        const seat = typeof sb.getSnapshot === 'function' ? sb.getSnapshot()?.sessionId : undefined
        if (seat === undefined) return false
      }
      try {
        sb.openTab({ type: 'git' }, sessionId ? { sessionId } : undefined)
        return true
      } catch { return false }
    }

    function DevCmdConfigModal(props) {
      const { open, onClose, wsPath, onSave, error } = props
      const [cmd, setCmd] = React.useState('')
      const [busy, setBusy] = React.useState(false)

      React.useEffect(() => {
        if (open) { setCmd(getWsDevCmd(wsPath) || 'npm run dev'); setBusy(false) }
      }, [open, wsPath])

      if (!open || typeof document === 'undefined') return null

      const presets = ['npm run dev', 'pnpm dev', 'yarn start', 'cargo run', 'python main.py']

      const handleSubmit = async (e) => {
        if (e) e.preventDefault()
        const trimmed = cmd.trim()
        setWsDevCmd(wsPath, trimmed)
        if (!trimmed || !onSave) { onClose(); return }
        setBusy(true)
        const res = await onSave(trimmed)
        setBusy(false)
        // 启动失败时保持对话框打开并展示原因，不再静默关闭。
        if (res && res.ok === false) return
        onClose()
      }

      return ReactDOM.createPortal(
        h('div', { className: 'dsh-dev-modal-overlay', onClick: onClose },
          h('div', { className: 'dsh-dev-modal', onClick: (e) => e.stopPropagation() },
            h('div', { className: 'dsh-dev-modal-head' },
              h('div', { className: 'dsh-dev-modal-title' }, '设置项目启动命令'),
              h('button', { type: 'button', className: 'dsh-dev-modal-close', onClick: onClose }, '×'),
            ),
            h('form', { onSubmit: handleSubmit, className: 'dsh-dev-modal-form' },
              h('div', { className: 'dsh-dev-modal-path' }, wsPath),
              h('input', {
                type: 'text',
                className: 'dsh-dev-modal-input',
                autoFocus: true,
                value: cmd,
                placeholder: '例如: npm run dev 或 pnpm dev',
                onChange: (e) => setCmd(e.target.value),
              }),
              h('div', { className: 'dsh-dev-modal-presets' },
                h('span', { className: 'dsh-dev-modal-preset-label' }, '常用预设:'),
                presets.map((p) => h('button', {
                  key: p,
                  type: 'button',
                  className: 'dsh-dev-modal-preset-btn',
                  onClick: () => setCmd(p),
                }, p)),
              ),
              error ? h('div', { className: 'dsh-dev-modal-error' }, error) : null,
              h('div', { className: 'dsh-dev-modal-foot' },
                h('button', { type: 'button', className: 'dsh-dev-modal-btn is-cancel', onClick: onClose }, '取消'),
                h('button', { type: 'submit', className: 'dsh-dev-modal-btn is-primary', disabled: busy }, busy ? '启动中…' : '保存并启动'),
              ),
            ),
          ),
        ),
        document.body,
      )
    }

    /** Git 按钮右键菜单：列出两种动作，点击项 = 设为默认并立即执行。 */
    function DevGitMenu({ open, anchorRef, current, onPick, onClose }) {
      const [coords, setCoords] = React.useState(null)
      const place = React.useCallback(() => {
        const btn = anchorRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(260, window.innerWidth - 16)
        let l = r.right - w
        if (l < 8) l = 8
        setCoords({ left: l, top: r.bottom + 6, width: w })
      }, [anchorRef])
      usePopover(open, (next) => { if (!next && typeof onClose === 'function') onClose() }, place, anchorRef, '.dsh-dev-menu')
      if (!open || !coords || typeof document === 'undefined') return null
      const item = (value, label) => h('button', {
        type: 'button',
        className: 'dsh-wspath-hmenu-item' + (current === value ? ' is-active' : ''),
        onClick: () => onPick(value),
      },
        h('span', { className: 'dsh-wspath-hmenu-icon' }, current === value ? h(IconCheck, { size: 13 }) : null),
        h('span', null, label),
      )
      return ReactDOM.createPortal(
        h('div', { className: 'dsh-wspath-hmenu dsh-dev-menu', style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' } },
          h('div', { className: 'dsh-wspath-hmenu-head' },
            h('div', { className: 'dsh-wspath-hmenu-title' }, 'Git 按钮默认动作'),
            h('div', { className: 'dsh-wspath-sid-label' }, '点击即设为默认并执行'),
          ),
          h('div', { className: 'dsh-wspath-hmenu-list' },
            item('sidebar', '打开「文件变动」页'),
            item('terminal', '在外部终端运行 git status'),
          ),
        ), document.body)
    }

    function DevActionButtons(props) {
      const { connection, wsPath, size = 13, showBorder = false, sessionId, getBetterSidebar, variant = 'row', big = false } = props
      const [modalOpen, setModalOpen] = React.useState(false)
      const [modalError, setModalError] = React.useState('')
      const [menuOpen, setMenuOpen] = React.useState(false)
      const [gitAction, setGitActionState] = React.useState(getGitAction)
      const gitBtnRef = React.useRef(null)

      if (!wsPath) return null

      // 宿主调用失败（通道 4xx/5xx、脚本被系统拒绝等）必须变成可见错误，不能静默吞掉。
      const launch = async (cmd) => {
        try {
          const res = await runWorkspaceCommand(connection, wsPath, cmd)
          return res && typeof res === 'object' ? res : { ok: false, error: { message: '宿主连接不可用，请刷新页面后重试' } }
        } catch (err) {
          return { ok: false, error: { message: String(err?.message || err) } }
        }
      }

      const openModal = (message) => { setModalError(message || ''); setModalOpen(true) }

      // header 位置按偏好动作执行；工作区列表行保持旧行为（外部终端 git status）。
      const runGitAction = (action) => {
        if (action !== 'terminal' && openChangesPage(getBetterSidebar, sessionId)) return
        launch('git status')
      }

      const onGitClick = (e) => {
        if (e) e.stopPropagation()
        setMenuOpen(false)
        recordWorkspaceUse(wsPath)
        runGitAction(variant === 'header' ? gitAction : 'terminal')
      }

      const onGitContext = (e) => {
        if (variant !== 'header') return
        e.preventDefault()
        e.stopPropagation()
        setMenuOpen(true)
      }

      const pickGitAction = (value) => {
        setGitAction(value)
        setGitActionState(value)
        setMenuOpen(false)
        recordWorkspaceUse(wsPath)
        runGitAction(value)
      }

      const onRunDev = async (e) => {
        if (e) e.stopPropagation()
        recordWorkspaceUse(wsPath)
        const savedCmd = getWsDevCmd(wsPath)
        if (!savedCmd) { openModal(''); return }
        const res = await launch(savedCmd)
        if (res && res.ok === false) openModal(res.error?.message || '启动失败')
      }

      const onContextMenu = (e) => {
        e.preventDefault()
        e.stopPropagation()
        openModal('')
      }

      const devCmd = getWsDevCmd(wsPath)
      const devTip = devCmd ? `启动: ${devCmd}\n(右键修改启动命令)` : '设置并启动项目开发命令'
      const gitTip = variant === 'header'
        ? (gitAction === 'terminal' ? '在外部终端运行 git status\n(右键切换默认动作)' : '打开「文件变动」页 (Better Sidebar)\n(右键切换默认动作)')
        : '在外部终端运行 git status'

      const btnCls = (showBorder ? 'dsh-dev-btn is-bordered' : 'dsh-dev-btn') + (big ? ' is-big' : '')

      return h('div', { className: 'dsh-dev-actions' + (big ? ' is-big' : '') },
        h('button', {
          ref: gitBtnRef,
          type: 'button',
          className: btnCls,
          title: gitTip,
          'aria-label': 'Git',
          onClick: onGitClick,
          onContextMenu: onGitContext,
        }, h(IconGit, { size })),
        h('button', {
          type: 'button',
          className: btnCls,
          title: devTip,
          'aria-label': 'Run Dev Command',
          onClick: onRunDev,
          onContextMenu: onContextMenu,
        }, h(IconRocket, { size })),
        h(DevGitMenu, { open: menuOpen, anchorRef: gitBtnRef, current: gitAction, onPick: pickGitAction, onClose: () => setMenuOpen(false) }),
        h(DevCmdConfigModal, {
          open: modalOpen,
          onClose: () => setModalOpen(false),
          wsPath,
          error: modalError,
          onSave: async (newCmd) => {
            if (!newCmd) return undefined
            recordWorkspaceUse(wsPath)
            const res = await launch(newCmd)
            setModalError(res && res.ok === false ? (res.error?.message || '启动失败') : '')
            return res
          },
        }),
      )
    }

    /** 会话头部右上角的 Git + 启动命令按钮（跟随当前会话的工作区，28px 大号样式）。 */
    function SessionDevActions({ sessionId, workspaces, sessions, connection, getBetterSidebar }) {
      const sesSnap = useSnapshot(sessions?.list), wsSnap = useSnapshot(workspaces?.list)
      const targetId = sessionId || sesSnap?.current
      const ws = findSessionWorkspace(wsSnap, sesSnap, targetId)
      if (!ws || !ws.path) return null
      return h(DevActionButtons, {
        connection, wsPath: ws.path, sessionId: targetId, getBetterSidebar,
        size: 16, variant: 'header', big: true,
      })
    }

    const APP_NAMES = {
      finder: '访达',
      explorer: '文件资源管理器',
      filemanager: '文件管理器',
      cursor: 'Cursor',
      vscode: 'VS Code',
      vscodeinsiders: 'VS Code Insiders',
      windsurf: 'Windsurf',
      zed: 'Zed',
      xcode: 'Xcode',
      androidstudio: 'Android Studio',
      intellij: 'IntelliJ IDEA',
      pycharm: 'PyCharm',
      webstorm: 'WebStorm',
      sublimetext: 'Sublime Text',
      terminal: '终端',
      iterm: 'iTerm2',
      warp: 'Warp',
      ghostty: 'Ghostty',
    }

    function AppIcon({ appId, size = 14 }) {
      const [failed, setFailed] = React.useState(false)
      if (failed || !appId) {
        if (appId === 'terminal' || appId === 'iterm' || appId === 'warp' || appId === 'ghostty') return h(IconTerminal, { size })
        if (appId === 'finder' || appId === 'explorer' || appId === 'filemanager') return h(IconFolder, { size })
        return h(IconOpen, { size })
      }
      return h('img', {
        src: `/open-in-app/icon/${appId}`,
        alt: '', className: 'dsh-hero-app-icon', draggable: false,
        onError: () => setFailed(true),
      })
    }

    function HeroWorkspaceTools(props) {
      const { selectedId, workspaces, sessions, connection, useWorkspaces, getBetterSidebar } = props
      const t = locale()
      const [copied, setCopied] = React.useState(false)
      const copiedTimer = React.useRef(null)
      const [menuOpen, setMenuOpen] = React.useState(false)
      const [menuCoords, setMenuCoords] = React.useState(null)
      const splitBtnRef = React.useRef(null)
      const [apps, setApps] = React.useState([])
      const [choice, setChoice] = React.useState('')

      const wsSnap = useSnapshot(workspaces?.list)
      const sesSnap = useSnapshot(sessions?.list)
      const snap = typeof useWorkspaces === 'function' ? useWorkspaces((s) => s) : wsSnap
      const items = snap?.items || wsSnap?.items || []
      const currentWs = (selectedId ? items.find((it) => it.workspaceId === selectedId) : null) ||
                        items.find((it) => it.isCurrent) ||
                        items[0]
      // A picked workspace already opens a blank Session (the Hero is only shown
      // for that Session or for none at all), and the Hero slot carries no
      // sessionId. Resolve the retained main-view Session here so the Git button
      // can target Better Sidebar's page for it instead of falling back to an
      // external terminal.
      const sessionId = mainSessionId(sesSnap)

      React.useEffect(() => {
        let mounted = true
        const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('dsh.open-in-app.choice') : ''
        if (saved) setChoice(saved)

        fetch('/open-in-app/apps')
          .then((res) => (res.ok ? res.json() : {}))
          .then((data) => {
            if (!mounted) return
            const raw = Array.isArray(data) ? data : (data?.apps || [])
            const valid = raw.filter((id) => typeof id === 'string')
            const finalApps = valid.length > 0 ? valid : ['finder', 'terminal']
            setApps(finalApps)
            if (!saved && finalApps.length > 0) {
              setChoice(finalApps.includes('terminal') ? 'terminal' : finalApps[0])
            }
          })
          .catch(() => {
            if (!mounted) return
            setApps(['finder', 'terminal'])
            if (!saved) setChoice('terminal')
          })
        return () => { mounted = false }
      }, [])

      const currentApp = (choice && apps.includes(choice)) ? choice : (apps[0] || 'terminal')
      const currentAppName = APP_NAMES[currentApp] || currentApp

      const onCopy = async (e) => {
        if (e) e.stopPropagation()
        if (!currentWs?.path) return
        recordWorkspaceUse(currentWs)
        const ok = await writeClipboard(currentWs.path)
        if (ok) {
          setCopied(true)
          if (copiedTimer.current) clearTimeout(copiedTimer.current)
          copiedTimer.current = setTimeout(() => setCopied(false), 1500)
        }
      }

      const launchApp = async (appId) => {
        if (!currentWs?.path) return
        recordWorkspaceUse(currentWs)
        try {
          const res = await fetch('/open-in-app/open', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ app: appId, path: currentWs.path }),
          })
          if (!res.ok) throw new Error('HTTP ' + res.status)
        } catch {
          if (appId === 'finder' || appId === 'explorer' || appId === 'filemanager') {
            connection?.rpc?.call('/dsh-workspace-path', 'reveal', { path: currentWs.path })
          } else {
            connection?.rpc?.call('/dsh-workspace-path', 'terminal', { path: currentWs.path })
          }
        }
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('dsh.open-in-app.choice', appId)
        }
        setChoice(appId)
        setMenuOpen(false)
      }

      const placeMenu = React.useCallback(() => {
        const btn = splitBtnRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect()
        setMenuCoords({ left: Math.max(8, r.left), top: r.bottom + 6 })
      }, [])

      usePopover(menuOpen, setMenuOpen, placeMenu, splitBtnRef, '.dsh-hero-app-menu')

      if (!currentWs?.path) return null

      const copyTip = copied ? t.copied : `${t.copyBtn}\n${currentWs.path}`
      const openTip = `${currentAppName} 打开\n${currentWs.path}`

      const menu = menuOpen && menuCoords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', {
              className: 'dsh-hero-app-menu',
              style: { position: 'fixed', left: menuCoords.left + 'px', top: menuCoords.top + 'px' },
            },
              apps.map((appId) => {
                const isCur = appId === currentApp
                return h('button', {
                  key: appId,
                  type: 'button',
                  className: 'dsh-hero-app-item' + (isCur ? ' is-selected' : ''),
                  onClick: () => launchApp(appId),
                },
                  h(AppIcon, { appId }),
                  h('span', { className: 'dsh-hero-app-label' }, APP_NAMES[appId] || appId),
                  isCur ? h('span', { className: 'dsh-hero-app-badge' }, '(默认)') : null,
                )
              }),
            ),
            document.body,
          )
        : null

     return h('div', { className: 'dsh-hero-tools' },
       h('span', { className: 'dsh-hero-tools-sep' }),
        h(DevActionButtons, {
          connection, wsPath: currentWs.path, showBorder: true,
          sessionId, getBetterSidebar, variant: 'header',
        }),
       h('button', {
          type: 'button',
          className: 'dsh-hero-tool-btn' + (copied ? ' is-copied' : ''),
          title: copyTip,
          'aria-label': t.copyBtn,
          onClick: onCopy,
        },
          h(copied ? IconCheck : IconCopy, { size: 13 }),
        ),
        apps.length > 0 ? h('div', { ref: splitBtnRef, className: 'dsh-hero-split-btn' + (menuOpen ? ' is-open' : '') },
          h('button', {
            type: 'button',
            className: 'dsh-hero-split-main',
            title: openTip,
            'aria-label': openTip,
            onClick: () => launchApp(currentApp),
          },
            h(AppIcon, { appId: currentApp }),
          ),
          h('span', { className: 'dsh-hero-split-sep' }),
          h('button', {
            type: 'button',
            className: 'dsh-hero-split-arrow',
            title: '选择打开方式',
            'aria-label': '选择打开方式',
            onClick: () => setMenuOpen((v) => !v),
          },
            h(IconChevronDown, { size: 10 }),
          ),
        ) : null,
        menu,
      )
    }

    /**
     * The official new-page workspace picker: rows can act on their workspace
     * exactly like the Hub's rows (copy / Git / dev command / terminal / reveal).
     * The row actions are the same components; only the carrier differs.
     */
    function HeroWorkspacePicker(props) {
      const { open, anchorRef, selectedId, onPick, onClose, workspaces, sessions, uiWorkspace, getUiWorkspace, connection, useWorkspaces, getBetterSidebar } = props
      const t = locale(), inputRef = React.useRef(null)
      const [coords, setCoords] = React.useState(null)
      const panel = usePanelReset(open)
      const wsSnap = useSnapshot(workspaces?.list)
      const sesSnap = useSnapshot(sessions?.list)
      const host = useSnapshot(connection?.hostDescription)
      const home = host?.homeDirectory || host?.home
      const snap = typeof useWorkspaces === 'function' ? useWorkspaces((state) => state) : wsSnap
      const items = snap?.items || wsSnap?.items || []
      const usageMap = useWorkspaceUsageSnapshot(open)
      const model = pickerModel({ items, query: panel.query, view: panel.view, currentId: selectedId, sessionsById: sesSnap?.byId, usageMap })
      const place = React.useCallback(() => {
        const btn = anchorRef?.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), top: r.bottom + 6, width: w })
      }, [anchorRef])
      usePopover(open, (next) => { if (!next) onClose?.() }, place, anchorRef || { current: null }, '.dsh-wspath-panel')
      React.useEffect(() => { if (open) inputRef.current?.focus() }, [open])
      const handleSelect = (ws) => {
        recordWorkspaceUse(ws)
        if (typeof onPick === 'function') onPick(ws.workspaceId)
        if (typeof onClose === 'function') onClose()
      }
      const canPickDir = typeof (getUiWorkspace?.() ?? uiWorkspace)?.pickDirectory === 'function' && typeof workspaces?.create === 'function'
      const [adding, setAdding] = React.useState(false)
      const handleAddWorkspace = async () => {
        if (!canPickDir || adding) return
        setAdding(true)
        try {
          const added = await pickAndAddWorkspace({ uiWorkspace, getUiWorkspace, workspaces, startSession: (workspaceId) => handleSelect({ workspaceId }) })
          if (added) onClose?.()
        } catch (err) {
          panel.setError(true)
          panel.setStatus(err instanceof Error ? err.message : String(err))
        } finally { setAdding(false) }
      }
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))
      const flash = (message, isError = false) => {
        panel.setError(isError)
        panel.setStatus(message)
      }
      const onCopy = async (ws) => { recordWorkspaceUse(ws); const ok = await writeClipboard(ws.path); flash(ok ? t.copied : t.copyFailed, !ok) }
      const onOpen = (ws) => { recordWorkspaceUse(ws); connection?.rpc?.call('/dsh-workspace-path', 'reveal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true)) }
      const onTerminal = (ws) => { recordWorkspaceUse(ws); connection?.rpc?.call('/dsh-workspace-path', 'terminal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true)) }
      const node = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-panel is-hero', style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' } },
              h(PathPanel, {
                t,
                model,
                query: panel.query,
                onQuery: panel.setQuery,
                inputRef,
                currentId: selectedId,
                home,
                variant: 'picker',
                actions: true,
                onSelect: handleSelect,
                onCopy,
                onOpen,
                onTerminal,
                canOpen,
                revealLabel: hostRevealLabel(t, home),
                canAddWorkspace: canPickDir,
                onAddWorkspace: handleAddWorkspace,
                adding,
                status: panel.status,
                error: panel.error,
                onOpenDays: () => { panel.setQuery(''); panel.setView('days') },
                onBack: () => { panel.setQuery(''); panel.setView('projects') },
                connection,
              }),
            ), document.body) : null
      return h(React.Fragment, null,
        h(HeroWorkspaceTools, { selectedId, workspaces, sessions, connection, useWorkspaces, getBetterSidebar }),
        node,
      )
    }

    function findSessionWorkspace(wsSnap, sesSnap, sessionId) {
      if (!sessionId) return null
      const items = wsSnap?.items || []
      const bySes = items.find((it) => Array.isArray(it.sessionIds) && it.sessionIds.includes(sessionId))
      if (bySes) return bySes
      const cwd = sesSnap?.byId?.[sessionId]?.cwd
      return cwd ? (items.find((it) => it.path === cwd) || null) : null
    }

    function WorkspaceHeaderBadge({ sessionId, workspaces, sessions, connection, startSession }) {
      const t = locale()
      const [copied, setCopied] = React.useState(false)
      const copiedTimer = React.useRef(null), wsSnap = useSnapshot(workspaces?.list), sesSnap = useSnapshot(sessions?.list)
      const host = useSnapshot(connection?.hostDescription), home = host?.home
      const targetId = sessionId || sesSnap?.current, ws = findSessionWorkspace(wsSnap, sesSnap, targetId)
      const display = ws ? (abbreviateHomePath(ws.path, home) || ws.path) : ''

      if (!ws) return null

      const onCopy = async (e) => {
        if (e) e.stopPropagation()
        if (!ws.path) return
        recordWorkspaceUse(ws)
        const ok = await writeClipboard(ws.path)
        if (ok) {
          setCopied(true)
          if (copiedTimer.current) clearTimeout(copiedTimer.current)
          copiedTimer.current = setTimeout(() => setCopied(false), 1500)
        }
      }

      const onNewSession = async (e) => {
        if (e) e.stopPropagation()
        recordWorkspaceUse(ws)
        if (ws.workspaceId && typeof startSession === 'function') startSession(ws.workspaceId)
        else if (ws.path && workspaces?.create) {
          try { const res = await workspaces.create({ path: ws.path }); if (res?.workspaceId && typeof startSession === 'function') startSession(res.workspaceId) } catch {}
        }
      }

      const copyTip = copied ? t.copied : `${t.copyBtn}\n${ws.path}`
      const newSesTip = `${t.newSessionInWs}\n${ws.title || ws.path}`
      const wsTip = `${t.current}: ${ws.title || ws.path}\n${ws.path}\n(点击亦可复制路径)`

      return h('div', { className: 'dsh-wspath-hgroup' },
        h('button', {
          type: 'button',
          className: 'dsh-wspath-hbtn' + (copied ? ' is-copied' : ''),
          title: wsTip,
          'aria-label': wsTip,
          onClick: onCopy,
        },
          h('span', { className: 'dsh-wspath-hicon' }, h(IconFolder, { size: 13 })),
          h('span', { className: 'dsh-wspath-hname' }, ws.title || ws.path),
        ),
       h('span', { className: 'dsh-wspath-hsep' }),
       h('div', { className: 'dsh-wspath-hactions' },
         h('button', {
            type: 'button',
            className: 'dsh-wspath-haction-btn' + (copied ? ' is-copied' : ''),
            title: copyTip,
            'aria-label': t.copyBtn,
            onClick: onCopy,
          }, h(copied ? IconCheck : IconCopy, { size: 12 })),
          h('button', {
            type: 'button',
            className: 'dsh-wspath-haction-btn',
            title: newSesTip,
            'aria-label': t.newSessionInWs,
            onClick: onNewSession,
          }, h(IconPlus, { size: 12 })),
        ),
      )
    }

    function SessionIdBadge({ sessionId, sessions, connection }) {
      const t = locale(), badgeRef = React.useRef(null)
      const [open, setOpen] = React.useState(false), [coords, setCoords] = React.useState(null), [status, setStatus] = React.useState('')
      const hoverTimer = React.useRef(null), copiedTimer = React.useRef(null), sesSnap = useSnapshot(sessions?.list)
      const targetId = sessionId || sesSnap?.current
      const title = targetId ? (sesSnap?.byId?.[targetId]?.displayTitle || sesSnap?.byId?.[targetId]?.title || '') : ''
      const shortId = targetId ? (targetId.startsWith('session-') ? targetId.slice(8, 16) : targetId.slice(0, 8)) : ''
      const place = React.useCallback(() => {
        const btn = badgeRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), top: r.bottom + 6, width: w })
      }, [])
      usePopover(open, setOpen, place, badgeRef, '.dsh-wspath-sid-popover')
      if (!targetId) return null
      const onEnter = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setOpen(true) }
      const onLeave = () => { hoverTimer.current = setTimeout(() => setOpen(false), 160) }
      const flash = (msg) => { setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => { setStatus('') }, 1500)
      }
      const onCopyId = async () => { flash((await writeClipboard(targetId)) ? t.copiedSessionId : t.copyFailed) }
      const onNewWindow = () => {
        setOpen(false)
        openWebInBrowser(connection, targetId).then((error) => { if (error !== '') flash(error) })
      }
      const popover = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-sid-popover', style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' }, onMouseEnter: onEnter, onMouseLeave: onLeave },
              h('div', { className: 'dsh-wspath-sid-head' },
                h('div', { className: 'dsh-wspath-sid-title' }, h(IconChat, { size: 14 }), h('span', { className: 'dsh-wspath-sid-titletxt' }, title || t.sessionTitle)),
                h('div', { className: 'dsh-wspath-sid-label' }, t.sessionIdTitle),
                h('div', { className: 'dsh-wspath-sid-codebox' },
                  h('span', { className: 'dsh-wspath-sid-code' }, targetId),
                  h('button', { type: 'button', className: 'dsh-wspath-sid-copybtn', title: t.copySessionId, onClick: onCopyId }, h(IconCopy, { size: 13 })),
                ),
              ),
              status ? h('div', { className: 'dsh-wspath-hmenu-status' }, status) : null,
              h('div', { className: 'dsh-wspath-hmenu-divider' }),
              h('div', { className: 'dsh-wspath-hmenu-list' },
                h('button', { type: 'button', className: 'dsh-wspath-hmenu-item', onClick: onCopyId },
                  h('span', { className: 'dsh-wspath-hmenu-icon' }, h(IconCopy, { size: 14 })), h('span', null, status || t.copySessionId)),
                h('button', { type: 'button', className: 'dsh-wspath-hmenu-item', onClick: onNewWindow },
                  h('span', { className: 'dsh-wspath-hmenu-icon' }, h(IconOpen, { size: 14 })), h('span', null, t.openInNewWindow)),
              ),
            ), document.body) : null
      return h('div', { className: 'dsh-wspath-sid-badge', onMouseEnter: onEnter, onMouseLeave: onLeave },
        h('button', {
          ref: badgeRef, type: 'button', className: 'dsh-wspath-sid-btn' + (open ? ' is-open' : ''),
          title: `${title || '会话'}\nID: ${targetId}\n(悬停查看详情，点击复制)`, 'aria-label': '会话 ID', onClick: onCopyId,
        }, h('span', { className: 'dsh-wspath-sid-icon' }, '#'), h('span', { className: 'dsh-wspath-sid-hash' }, shortId)),
        popover,
      )
    }

    // 「在浏览器打开」：桌面壳的页面来自 dsh-app://，相对路径交给系统只会
    // 把 App 自己唤起来。这里向宿主要一条带 launch token 的 loopback 地址，
    // 再交给 window.open —— 桌面壳会把它转给 shell.openExternal。
    const OPEN_WEB_CHANNEL = '/dsh-workspace-path'

    /** Ask the host for the authenticated Web URL of one session. */
    function requestWebUrl(connection, sessionId) {
      const rpc = connection?.rpc
      if (!rpc || typeof rpc.call !== 'function') {
        return Promise.reject(new Error('connection.rpc is unavailable'))
      }
      return Promise.resolve(rpc.call(OPEN_WEB_CHANNEL, 'open-web', { sessionId }))
        .then((result) => {
          if (!result || result.ok !== true) {
            throw new Error(result?.error?.message || 'Unable to compose the Web URL')
          }
          const url = result.value?.url
          if (typeof url !== 'string' || url === '') throw new Error('The Web URL is empty')
          return url
        })
    }

    /** Open the Web GUI in the system browser; resolves to an error message or ''. */
    function openWebInBrowser(connection, sessionId) {
      return requestWebUrl(connection, sessionId)
        .then((url) => { window.open(url, '_blank'); return '' })
        .catch((error) => String(error?.message || error))
    }

    function IconWeb({ size = 13 }) {
      return h('svg', { viewBox: '0 0 16 16', width: size, height: size, fill: 'none', 'aria-hidden': 'true' }, [
        h('path', { key: 'arrow', d: 'M9.5 2.5h4v4M13.5 2.5L7.5 8.5', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round' }),
        h('path', { key: 'frame', d: 'M12.5 9.5v3a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round' }),
      ])
    }

    /** Session-header 「Web」 button, sitting next to the Git / dev pair. */
    function OpenInBrowserButton({ sessionId, sessions, connection }) {
      const t = locale()
      const [state, setState] = React.useState('idle')
      const timer = React.useRef(null)
      const sesSnap = useSnapshot(sessions?.list)
      const targetId = sessionId || sesSnap?.current
      const busy = state === 'busy'

      React.useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

      const onClick = (event) => {
        event?.preventDefault?.()
        event?.stopPropagation?.()
        if (busy) return
        const settle = (next, delay) => {
          setState(next)
          if (timer.current) clearTimeout(timer.current)
          timer.current = setTimeout(() => setState('idle'), delay)
        }
        setState('busy')
        openWebInBrowser(connection, targetId).then((error) => {
          if (error !== '') console.error('[dsh-workspace-path] open in browser:', error)
          settle(error === '' ? 'done' : 'error', error === '' ? 1200 : 1800)
        })
      }

      return h('div', { className: 'dsh-wspath-web' },
        h('button', {
          type: 'button',
          className: 'dsh-wspath-web-btn',
          'data-state': state,
          title: t.openWebTip,
          'aria-label': t.openWebTip,
          onClick,
        }, [h(IconWeb, { key: 'icon', size: 13 }), h('span', { key: 'label' }, state === 'error' ? t.openWebFailed : t.openWeb)]))
    }

    /** Register the header 「Web」 button; one line from client/apply.js. */
    function mountOpenInBrowser(ctx) {
      ctx.slots.inject('conversation.session.header.utilities', () => {
        let dispose
        try {
          dispose = ctx.slots.register({
            name: 'conversation.session.header.utilities',
            id: 'dsh-workspace-path-web',
            order: 60,
          }, (props) => h(OpenInBrowserButton, {
            sessionId: props?.sessionId,
            sessions: ctx.sessions,
            connection: ctx.connection,
          }))
        } catch (error) {
          console.error('[dsh-workspace-path] failed to register the Web button:', error)
          dispose = undefined
        }
        return () => { if (dispose) dispose() }
      })
    }

    // Official sidebar workspace filter: projects first by default.
    //
    // The stock list renders one group per registered Workspace, and day folders
    // (days/YYYY-MM-DD) accumulate until they crowd out real projects. This layer
    // hides dated groups while always keeping today's folder and the folder of the
    // open session. It is presentation only: workspace.json, directories and
    // session membership are untouched, and choosing "all" restores the list.
    const SF_MODE_KEY = 'dsh.wspath.sidebar-filter'
    const SF_HIDDEN = 'dsh-wspath-sf-hidden'

    function sfCopy() {
      const en = typeof document !== 'undefined' && String(document.documentElement.lang).toLowerCase().startsWith('en')
      return en
        ? { projects: 'Projects', all: 'All', filter: 'Filter workspaces', onlyProjects: 'Projects only', showAll: 'All workspaces', hidden: '{n} day workspaces hidden', none: 'No day workspaces hidden', hiddenShort: '{n} day folders hidden', noneShort: 'No day folders', allShort: 'Showing all, incl. {n} day folders', byDay: 'Open day workspaces' }
        : { projects: '项目', all: '全部', filter: '筛选工作区', onlyProjects: '只看项目', showAll: '全部工作区', hidden: '已收起 {n} 个按天工作区', none: '没有收起按天工作区', hiddenShort: '已收起 {n} 个按天目录', noneShort: '没有按天目录', allShort: '显示全部，含 {n} 个按天目录', byDay: '查看按天工作区' }
    }

    function readSidebarFilterMode() {
      try { return localStorage.getItem(SF_MODE_KEY) === 'all' ? 'all' : 'projects' } catch { return 'projects' }
    }

    function writeSidebarFilterMode(mode) {
      try { localStorage.setItem(SF_MODE_KEY, mode === 'all' ? 'all' : 'projects') } catch {}
    }

    function sfQueryLabel(labels) {
      for (const label of labels) {
        const node = document.querySelector('button[aria-label=' + JSON.stringify(label) + ']')
        if (node) return node
      }
      return null
    }

    function sfViewOptionsButton() { return sfQueryLabel(['视图选项', 'View options']) }
    function sfSearchExpanded() { return Boolean(sfQueryLabel(['清除搜索', 'Clear search'])) }

    // The sidebar tree, found from the official view-options button so a look-alike
    // list in a side panel can never be filtered by accident.
    function sfFindTree(anchor) {
      let node = anchor
      while (node && node !== document.body) {
        const tree = node.querySelector?.(':scope div[role="tree"]')
        if (tree) return tree
        node = node.parentElement
      }
      return null
    }

    // Footer slot: one quiet status row under the tree. The section header is a
    // fixed 36px strip that already holds search, view options and add; a new
    // control there pushes those official buttons out of the clipped header, so
    // the filter lives where it can also explain the shortened list.
    function sfEnsureSlot() {
      const anchor = sfViewOptionsButton()
      if (!anchor) return { slot: null, tree: null }
      const tree = sfFindTree(anchor)
      const treeBody = tree?.parentElement
      const listArea = treeBody?.parentElement
      const root = listArea?.parentElement
      if (!tree || !treeBody || !listArea || !root) return { slot: null, tree }
      // 固定在区头与列表之间：随内容滚动会看不见，贴底又会被输入区挡住。
      let slot = root.querySelector(':scope > .dsh-wspath-sf-slot')
      if (!slot) {
        slot = document.createElement('div')
        slot.className = 'dsh-wspath-sf-slot'
        root.insertBefore(slot, listArea)
      }
      // 搜索时官方用扁平结果替换整棵树，筛选不参与，提示行也一并收起。
      slot.classList.toggle('is-searching', sfSearchExpanded())
      return { slot, tree }
    }

    function sfSessionOwners(items) {
      const owner = new Map()
      for (const ws of items ?? []) {
        for (const id of ws?.sessionIds ?? []) owner.set(id, ws.workspaceId)
      }
      return owner
    }

    // Grouped modes hide the group container (its sessions go with it); the flat
    // mode has no groups, so its session rows are hidden instead. Only classes
    // change, so the stock store and drag state stay authoritative.
    function sfApply(tree, model, owner, applied) {
      if (!tree) return
      for (const el of [...applied]) if (!el.isConnected) applied.delete(el)
      const mark = (el, hide) => {
        if (!el) return
        if (hide) {
          if (el.classList.contains(SF_HIDDEN)) return
          el.classList.add(SF_HIDDEN)
          applied.add(el)
        } else if (el.classList.contains(SF_HIDDEN)) {
          el.classList.remove(SF_HIDDEN)
          applied.delete(el)
        }
      }
      for (const row of tree.querySelectorAll('[data-row-key^="workspace:"]')) {
        const id = (row.getAttribute('data-row-key') || '').slice('workspace:'.length)
        mark(row.parentElement, model.hidden.has(id))
      }
      for (const row of tree.querySelectorAll('[data-row-key^="session:"]')) {
        const id = (row.getAttribute('data-row-key') || '').slice('session:'.length)
        const workspaceId = owner.get(id)
        mark(row, workspaceId !== undefined && model.hidden.has(workspaceId))
      }
    }

    function SidebarFilterButton({ ctx, hubRef }) {
      const t = sfCopy()
      const wsSnap = useSnapshot(ctx.workspaces?.list)
      const sesSnap = useSnapshot(ctx.sessions?.list)
      const [mode, setMode] = React.useState(readSidebarFilterMode)
      const [slot, setSlot] = React.useState(null)
      const [open, setOpen] = React.useState(false)
      const [coords, setCoords] = React.useState(null)
      const buttonRef = React.useRef(null)
      const slotRef = React.useRef(null)
      const treeRef = React.useRef(null)
      const appliedRef = React.useRef(new Set())
      const stateRef = React.useRef({})

      const items = wsSnap?.items || []
      const currentId = currentWorkspaceId(items, sesSnap?.byId)
      const model = sidebarFilterModel(items, { mode, currentId })
      stateRef.current = { model, items }

      const sync = React.useCallback(() => {
        const found = sfEnsureSlot()
        if (found.slot && found.slot !== slotRef.current) {
          slotRef.current = found.slot
          setSlot(found.slot)
        }
        if (found.tree) treeRef.current = found.tree
        sfApply(treeRef.current, stateRef.current.model, sfSessionOwners(stateRef.current.items), appliedRef.current)
      }, [])

      React.useEffect(() => {
        let frame = 0
        let disposed = false
        const schedule = () => {
          if (frame || disposed) return
          frame = requestAnimationFrame(() => {
            frame = 0
            if (disposed) return
            if (slotRef.current && !slotRef.current.isConnected) {
              slotRef.current = null
              treeRef.current = null
              setSlot(null)
            }
            sync()
          })
        }
        const observer = new MutationObserver((records) => {
          for (const record of records) {
            if (record.target instanceof Element && record.target.closest?.('.dsh-wspath-sf-slot')) return
            const tree = treeRef.current
            if (tree) {
              if (record.target instanceof Node && (record.target === tree || tree.contains(record.target))) return schedule()
              for (const node of record.removedNodes) {
                if (node instanceof Element && (node === tree || node.contains(tree))) return schedule()
              }
            }
            for (const node of record.addedNodes) {
              if (!(node instanceof Element)) continue
              if (node.matches?.('div[role="tree"]') || node.querySelector?.('div[role="tree"]')) return schedule()
            }
          }
        })
        observer.observe(document.body, { childList: true, subtree: true })
        schedule()
        return () => {
          disposed = true
          observer.disconnect()
          if (frame) cancelAnimationFrame(frame)
        }
      }, [sync])

      // Data changes (session switch, new day folder, filter flip) re-apply at once.
      React.useEffect(() => { sync() }, [sync, model, items])

      const place = React.useCallback(() => {
        const button = buttonRef.current
        if (!button) return
        const rect = button.getBoundingClientRect()
        const width = Math.min(236, window.innerWidth - 16)
        const left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8))
        // 靠近窗口底部时向上弹，避免被输入区与底部面板遮住。
        const menuHeight = 200
        const below = rect.bottom + 6
        const top = below + menuHeight > window.innerHeight - 12
          ? Math.max(12, rect.top - menuHeight - 6)
          : below
        setCoords({ left, top, width })
      }, [])
      usePopover(open, setOpen, place, buttonRef, '.dsh-wspath-sf-menu')

      const pick = (next) => {
        setMode(next)
        writeSidebarFilterMode(next)
        setOpen(false)
      }
      const openDays = () => {
        setOpen(false)
        const hub = hubRef?.current
        if (hub && typeof hub.openDays === 'function') hub.openDays()
      }

      const hiddenText = model.hiddenCount > 0 ? t.hidden.replace('{n}', String(model.hiddenCount)) : t.none
      const label = `${t.filter}：${mode === 'projects' ? t.onlyProjects : t.showAll}`
      const shortHint = mode === 'projects'
        ? (model.hiddenCount > 0 ? t.hiddenShort.replace('{n}', String(model.hiddenCount)) : t.noneShort)
        : t.allShort.replace('{n}', String(model.dayCount))

      const button = h('button', {
        ref: buttonRef,
        type: 'button',
        className: 'dsh-wspath-sf-btn' + (mode === 'projects' ? ' is-projects' : ' is-all'),
        title: `${label}\n${hiddenText}`,
        'aria-label': label,
        'aria-haspopup': 'menu',
        'aria-expanded': open ? 'true' : 'false',
        onClick: () => setOpen((v) => !v),
      },
        h('span', { className: 'dsh-wspath-sf-lead' },
          h(IconFilter, { size: 12 }),
          h('span', { className: 'dsh-wspath-sf-text' }, mode === 'projects' ? t.projects : t.all),
          mode === 'projects' && model.projectCount > 0 ? h('span', { className: 'dsh-wspath-sf-count' }, String(model.projectCount)) : null,
        ),
        h('span', { className: 'dsh-wspath-sf-hint' }, shortHint),
      )

      const menu = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(h('div', {
            className: 'dsh-wspath-sf-menu',
            role: 'menu',
            'aria-label': t.filter,
            style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' },
          },
          h('div', { className: 'dsh-wspath-sf-menu-title' }, t.filter),
          h('button', {
            type: 'button', role: 'menuitemradio', 'aria-checked': mode === 'projects' ? 'true' : 'false',
            className: 'dsh-wspath-sf-item' + (mode === 'projects' ? ' is-checked' : ''),
            onClick: () => pick('projects'),
          },
            h('span', { className: 'dsh-wspath-sf-check' }, mode === 'projects' ? h(IconCheck, { size: 12 }) : null),
            h('span', { className: 'dsh-wspath-sf-label' }, t.onlyProjects),
            model.dayCount > 0 ? h('span', { className: 'dsh-wspath-sf-count' }, String(model.dayCount)) : null,
          ),
          h('div', { className: 'dsh-wspath-sf-note' }, hiddenText),
          h('button', {
            type: 'button', role: 'menuitemradio', 'aria-checked': mode === 'all' ? 'true' : 'false',
            className: 'dsh-wspath-sf-item' + (mode === 'all' ? ' is-checked' : ''),
            onClick: () => pick('all'),
          },
            h('span', { className: 'dsh-wspath-sf-check' }, mode === 'all' ? h(IconCheck, { size: 12 }) : null),
            h('span', { className: 'dsh-wspath-sf-label' }, t.showAll),
          ),
          h('div', { className: 'dsh-wspath-sf-sep' }),
          h('button', { type: 'button', role: 'menuitem', className: 'dsh-wspath-sf-item', onClick: openDays },
            h('span', { className: 'dsh-wspath-sf-check' }, h(IconFolder, { size: 12 })),
            h('span', { className: 'dsh-wspath-sf-label' }, t.byDay),
          ),
        ), document.body)
        : null

      return h(React.Fragment, null,
        slot ? ReactDOM.createPortal(button, slot) : null,
        menu,
      )
    }

    function mountSidebarFilter(ctx, hubRef) {
      if (typeof document === 'undefined' || !document.body) return () => {}
      const host = document.createElement('div')
      host.className = 'dsh-wspath-sf-mount'
      document.body.appendChild(host)
      let root
      try { root = ReactDOM.createRoot(host) } catch { root = null }
      if (!root) {
        host.remove()
        return () => {}
      }
      root.render(h(SidebarFilterButton, { ctx, hubRef }))
      return () => {
        try { root.unmount() } catch {}
        host.remove()
        for (const el of document.querySelectorAll('.' + SF_HIDDEN)) el.classList.remove(SF_HIDDEN)
        const slot = document.querySelector('.dsh-wspath-sf-slot')
        if (slot) slot.remove()
      }
    }

    const inject = ['slots', 'workspaces', 'sessions', 'connection']
    function apply(ctx) {
      // 侧栏筛选菜单要能打开工作区中心的「按天」页，用一个共享把手把两边连起来。
      const hubRef = { current: null }
      let uiWorkspace
      if (typeof ctx.inject === 'function') {
        ctx.inject(['uiWorkspace'], (sub) => {
          uiWorkspace = sub.uiWorkspace
          return () => { uiWorkspace = undefined }
        })
      }
      // Better Sidebar 服务（可选）：晚到也行，Git 按钮通过 getter 取最新值。
      let betterSidebar
      if (typeof ctx.inject === 'function') {
        ctx.inject(['betterSidebar'], (sub) => {
          betterSidebar = sub.betterSidebar
          return () => { betterSidebar = undefined }
        })
      }
      const startSession = (workspaceId) => {
        const owner = (uiWorkspace && typeof uiWorkspace.startSession === 'function') ? uiWorkspace : ctx.workspaces
        if (owner && typeof owner.startSession === 'function') owner.startSession(workspaceId)
      }
      const flowSource = {
        getSnapshot: () => (typeof ctx.slots.entries === 'function' ? ctx.slots.entries('conversation.hero.workspace.directoryFlow').length > 0 : false),
        subscribe: (listener) => (typeof ctx.slots.subscribe === 'function' ? ctx.slots.subscribe('conversation.hero.workspace.directoryFlow', listener) : () => {}),
      }
      ctx.slots.inject('sidebar.footer.action', () => {
        let dispose
        try {
          dispose = ctx.slots.register({ name: 'sidebar.footer.action', id: 'dsh-workspace-path' }, (props) =>
            h(PathButton, { wide: props?.wide, workspaces: ctx.workspaces, sessions: ctx.sessions, uiWorkspace, getUiWorkspace: () => uiWorkspace, connection: ctx.connection, startSession, controllerRef: hubRef }))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
      ctx.slots.inject('conversation.session.header.actions', () => {
        let disposeWs, disposeSid
        try {
          disposeWs = ctx.slots.register({ name: 'conversation.session.header.actions', id: 'dsh-workspace-path-badge', order: -20 }, (props) =>
            h(WorkspaceHeaderBadge, { sessionId: props?.sessionId, workspaces: ctx.workspaces, sessions: ctx.sessions, connection: ctx.connection, startSession }))
          disposeSid = ctx.slots.register({ name: 'conversation.session.header.actions', id: 'dsh-workspace-session-id-badge', order: -19 }, (props) =>
            h(SessionIdBadge, { sessionId: props?.sessionId, sessions: ctx.sessions, connection: ctx.connection }))
        } catch { disposeWs = undefined; disposeSid = undefined }
        return () => { if (disposeWs) disposeWs(); if (disposeSid) disposeSid() }
      })
      // 会话头部右上角：大号 Git + 启动命令按钮（utilities 槽，order 升序排列）。
      ctx.slots.inject('conversation.session.header.utilities', () => {
        let dispose
        try {
          dispose = ctx.slots.register({ name: 'conversation.session.header.utilities', id: 'dsh-workspace-path-dev', order: 40 }, (props) =>
            h(SessionDevActions, {
              sessionId: props?.sessionId,
              workspaces: ctx.workspaces,
              sessions: ctx.sessions,
              connection: ctx.connection,
              getBetterSidebar: () => betterSidebar,
            }))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
      ctx.slots.inject('conversation.hero.workspace', () => {
        let dispose
        try {
          dispose = ctx.slots.register({
            name: 'conversation.hero.workspace',
            id: 'dsh-workspace-path-hero',
            priority: -10,
          }, (props) => h(HeroWorkspacePicker, {
            ...props,
            workspaces: ctx.workspaces,
            sessions: ctx.sessions,
            uiWorkspace,
            getUiWorkspace: () => uiWorkspace,
            connection: ctx.connection,
            getBetterSidebar: () => betterSidebar,
          }))
        } catch (e) {
          console.error('[dsh-workspace-path] failed to register conversation.hero.workspace:', e)
          dispose = undefined
        }
        return () => { if (dispose) dispose() }
      })
      // 顶栏「Web」：用系统默认浏览器打开同一套 Harness 界面（合并自
      // dsh-open-in-browser；鉴权 URL 与会话 ID 浮层共用 open-web.js）。
      mountOpenInBrowser(ctx)
      // 官方左侧列表的「默认只看项目」筛层：DOM 适配 + 区头入口。
      ctx.effect(() => mountSidebarFilter(ctx, hubRef), 'dsh-workspace-path: sidebar filter')
    }
    module.exports.apply = apply
    module.exports.inject = inject

    return module.exports
  },
})
