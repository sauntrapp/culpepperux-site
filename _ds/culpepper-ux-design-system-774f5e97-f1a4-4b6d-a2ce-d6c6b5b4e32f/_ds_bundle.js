/* @ds-bundle: {"format":4,"namespace":"CulpepperUXDesignSystem_774f5e","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/display/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"ebf088167ed3","components/display/Card.jsx":"8399c453587c","components/display/Eyebrow.jsx":"d373b6f9971b","components/display/Stat.jsx":"ceb083b029e9","components/display/Tag.jsx":"141fa82c5792","components/feedback/Dialog.jsx":"3c5a07131515","components/feedback/Toast.jsx":"55b8c973b7d9","components/feedback/Tooltip.jsx":"1edd6e151f5d","components/forms/Button.jsx":"015905eb804d","components/forms/Checkbox.jsx":"da9c8bb1b17d","components/forms/IconButton.jsx":"63ca3472c2d0","components/forms/Input.jsx":"c18ec4c1c000","components/forms/Radio.jsx":"d54dd570996b","components/forms/Select.jsx":"1a96119c8368","components/forms/Switch.jsx":"d8ec31a38cae","components/navigation/Tabs.jsx":"fe1277661a71","ui_kits/portfolio/AboutScreen.jsx":"5521117c8e1a","ui_kits/portfolio/CaseStudyScreen.jsx":"5463f09a1374","ui_kits/portfolio/Header.jsx":"98b20a99c1bd","ui_kits/portfolio/HomeScreen.jsx":"2d787723d28c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CulpepperUXDesignSystem_774f5e = window.CulpepperUXDesignSystem_774f5e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
const css = `
.cux-badge { display: inline-flex; align-items: center; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; border-radius: var(--radius-xs); padding: 3px 8px; line-height: 1.4; white-space: nowrap; }
.cux-badge--neutral { background: var(--surface-inset); color: var(--text-secondary); }
.cux-badge--accent { background: var(--surface-accent); color: var(--text-inverse); }
.cux-badge--subtle { background: var(--surface-accent-subtle); color: var(--navy-800); }
.cux-badge--ok { background: var(--ok-bg); color: var(--ok-fg); }
.cux-badge--error { background: var(--error-bg); color: var(--error-fg); }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-badge-css')) {
  const s = document.createElement('style');
  s.id = 'cux-badge-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `cux-badge cux-badge--${tone}`,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
const css = `
.cux-card { background: var(--surface-card); border: var(--hairline); border-radius: var(--radius-md); font-family: var(--font-sans); transition: border-color 150ms ease-out; }
.cux-card--interactive { cursor: pointer; text-decoration: none; color: inherit; display: block; }
.cux-card--interactive:hover { border-color: var(--gray-500); }
.cux-card--inset { background: var(--surface-inset); border-color: transparent; }
.cux-card__pad { padding: var(--space-8); }
.cux-card__pad--compact { padding: var(--space-6); }
.cux-card__eyebrow { font-family: var(--font-mono); font-size: var(--text-mono-label); letter-spacing: var(--tracking-mono); text-transform: uppercase; color: var(--text-secondary); margin-bottom: var(--space-4); }
.cux-card__title { font-size: var(--text-h3); font-weight: var(--weight-semibold); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); margin: 0 0 var(--space-3); color: var(--text-primary); }
.cux-card__body { font-size: 15px; line-height: var(--leading-body); color: var(--text-secondary); }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-card-css')) {
  const s = document.createElement('style');
  s.id = 'cux-card-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Card({
  eyebrow,
  title,
  children,
  href,
  onClick,
  inset = false,
  compact = false,
  style
}) {
  const interactive = !!(href || onClick);
  const cls = `cux-card${interactive ? ' cux-card--interactive' : ''}${inset ? ' cux-card--inset' : ''}`;
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    className: cls,
    href: href,
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: `cux-card__pad${compact ? ' cux-card__pad--compact' : ''}`
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "cux-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "cux-card__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "cux-card__body"
  }, children)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Eyebrow.jsx
try { (() => {
const css = `
.cux-eyebrow { font-family: var(--font-mono); font-size: var(--text-mono-label); letter-spacing: var(--tracking-mono); text-transform: uppercase; color: var(--text-secondary); display: block; }
.cux-eyebrow--accent { color: var(--navy-800); }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-eyebrow-css')) {
  const s = document.createElement('style');
  s.id = 'cux-eyebrow-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Eyebrow({
  children,
  accent = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `cux-eyebrow${accent ? ' cux-eyebrow--accent' : ''}`,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
const css = `
.cux-stat { font-family: var(--font-sans); display: flex; flex-direction: column; gap: 4px; }
.cux-stat__value { font-family: var(--font-mono); font-size: 2.5rem; line-height: 1.1; color: var(--text-primary); }
.cux-stat__value--lg { font-size: 3.5rem; }
.cux-stat__label { font-size: var(--text-small); color: var(--text-secondary); max-width: 22ch; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-stat-css')) {
  const s = document.createElement('style');
  s.id = 'cux-stat-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Stat({
  value,
  label,
  size = 'md',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cux-stat",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: `cux-stat__value${size === 'lg' ? ' cux-stat__value--lg' : ''}`
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "cux-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const css = `
.cux-tag { display: inline-flex; align-items: center; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; border: var(--hairline-strong); border-radius: var(--radius-xs); padding: 3px 8px; line-height: 1.4; color: var(--text-secondary); background: transparent; white-space: nowrap; }
button.cux-tag { cursor: pointer; transition: border-color 150ms ease-out, color 150ms ease-out; }
button.cux-tag:hover { border-color: var(--ink); color: var(--text-primary); }
.cux-tag--selected, button.cux-tag--selected:hover { background: var(--ink); border-color: var(--ink); color: var(--text-inverse); }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-tag-css')) {
  const s = document.createElement('style');
  s.id = 'cux-tag-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Tag({
  children,
  selected = false,
  onClick,
  style
}) {
  const cls = `cux-tag${selected ? ' cux-tag--selected' : ''}`;
  if (onClick) return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cls,
    onClick: onClick,
    style: style
  }, children);
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const css = `
.cux-dialog-overlay { position: fixed; inset: 0; background: rgba(20, 21, 23, 0.4); display: flex; align-items: center; justify-content: center; padding: var(--space-6); z-index: 100; }
.cux-dialog { background: var(--surface-card); border: var(--hairline); border-radius: var(--radius-lg); max-width: 480px; width: 100%; padding: var(--space-8); font-family: var(--font-sans); position: relative; }
.cux-dialog__title { font-size: var(--text-h3); font-weight: var(--weight-bold); letter-spacing: var(--tracking-heading); margin: 0 0 var(--space-4); }
.cux-dialog__body { font-size: 15px; line-height: var(--leading-body); color: var(--text-secondary); }
.cux-dialog__footer { display: flex; justify-content: flex-end; gap: var(--space-3); margin-top: var(--space-8); }
.cux-dialog__close { position: absolute; top: 16px; right: 16px; background: none; border: none; cursor: pointer; font-size: 18px; color: var(--text-muted); width: 32px; height: 32px; border-radius: var(--radius-sm); }
.cux-dialog__close:hover { background: var(--surface-inset); color: var(--text-primary); }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-dialog-css')) {
  const s = document.createElement('style');
  s.id = 'cux-dialog-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Dialog({
  open,
  title,
  children,
  footer,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "cux-dialog-overlay",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cux-dialog",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cux-dialog__close",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7"), title && /*#__PURE__*/React.createElement("h3", {
    className: "cux-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "cux-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "cux-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const css = `
.cux-toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); background: var(--ink); color: var(--text-inverse); font-family: var(--font-sans); font-size: 15px; padding: 12px 20px; border-radius: var(--radius-sm); display: flex; align-items: center; gap: 16px; z-index: 110; }
.cux-toast__action { background: none; border: none; cursor: pointer; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--paper); text-decoration: underline; text-underline-offset: 3px; padding: 0; }
.cux-toast__action:hover { color: var(--white); }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-toast-css')) {
  const s = document.createElement('style');
  s.id = 'cux-toast-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Toast({
  open,
  message,
  actionLabel,
  onAction
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "cux-toast",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", null, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cux-toast__action",
    onClick: onAction
  }, actionLabel));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
const css = `
.cux-tooltip-wrap { position: relative; display: inline-flex; }
.cux-tooltip { position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); background: var(--ink); color: var(--text-inverse); font-family: var(--font-sans); font-size: 13px; line-height: 1.4; padding: 6px 10px; border-radius: var(--radius-xs); white-space: nowrap; pointer-events: none; z-index: 120; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-tooltip-css')) {
  const s = document.createElement('style');
  s.id = 'cux-tooltip-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: "cux-tooltip-wrap",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    className: "cux-tooltip",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const css = `
.cux-btn { font-family: var(--font-sans); font-weight: var(--weight-semibold); border-radius: var(--radius-sm); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; transition: background 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out; text-decoration: none; line-height: 1; }
.cux-btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.cux-btn[disabled] { opacity: 0.45; cursor: not-allowed; }
.cux-btn--primary { background: var(--accent); color: var(--text-inverse); border: 1px solid var(--accent); }
.cux-btn--primary:hover:not([disabled]) { background: var(--accent-hover); border-color: var(--accent-hover); }
.cux-btn--primary:active:not([disabled]) { background: var(--accent-active); border-color: var(--accent-active); }
.cux-btn--secondary { background: transparent; color: var(--text-primary); border: var(--hairline-strong); }
.cux-btn--secondary:hover:not([disabled]) { border-color: var(--ink); }
.cux-btn--secondary:active:not([disabled]) { background: var(--surface-inset); }
.cux-btn--ghost { background: transparent; color: var(--text-accent); border: 1px solid transparent; }
.cux-btn--ghost:hover:not([disabled]) { background: var(--surface-accent-subtle); }
.cux-btn--sm { font-size: 14px; padding: 7px 14px; }
.cux-btn--md { font-size: 15px; padding: 10px 20px; }
.cux-btn--lg { font-size: 17px; padding: 13px 26px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-button-css')) {
  const s = document.createElement('style');
  s.id = 'cux-button-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  href,
  style,
  className = ''
}) {
  const cls = `cux-btn cux-btn--${variant} cux-btn--${size} ${className}`;
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      className: cls,
      href: href,
      style: style,
      "aria-disabled": disabled || undefined
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cls,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const css = `
.cux-check { display: inline-flex; align-items: flex-start; gap: 10px; cursor: pointer; font-family: var(--font-sans); font-size: 15px; color: var(--text-primary); user-select: none; }
.cux-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.cux-check__box { width: 18px; height: 18px; flex: none; margin-top: 2px; border: var(--hairline-strong); border-radius: var(--radius-xs); background: var(--surface-card); display: flex; align-items: center; justify-content: center; transition: background 150ms ease-out, border-color 150ms ease-out; font-size: 12px; line-height: 1; color: transparent; }
.cux-check:hover .cux-check__box { border-color: var(--gray-500); }
.cux-check input:checked + .cux-check__box { background: var(--accent); border-color: var(--accent); color: var(--text-inverse); }
.cux-check input:focus-visible + .cux-check__box { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.cux-check--disabled { opacity: 0.45; cursor: not-allowed; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-check-css')) {
  const s = document.createElement('style');
  s.id = 'cux-check-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `cux-check${disabled ? ' cux-check--disabled' : ''}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "cux-check__box",
    "aria-hidden": "true"
  }, "\u2713"), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
const css = `
.cux-iconbtn { font-family: var(--font-sans); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; border-radius: var(--radius-sm); transition: background 150ms ease-out, border-color 150ms ease-out; background: transparent; color: var(--text-primary); border: 1px solid transparent; }
.cux-iconbtn--outline { border: var(--hairline-strong); }
.cux-iconbtn:hover:not([disabled]) { background: var(--surface-inset); }
.cux-iconbtn--outline:hover:not([disabled]) { border-color: var(--ink); background: transparent; }
.cux-iconbtn:active:not([disabled]) { background: var(--gray-200); }
.cux-iconbtn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.cux-iconbtn[disabled] { opacity: 0.45; cursor: not-allowed; }
.cux-iconbtn--sm { width: 32px; height: 32px; font-size: 15px; }
.cux-iconbtn--md { width: 40px; height: 40px; font-size: 17px; }
.cux-iconbtn--lg { width: 48px; height: 48px; font-size: 20px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-iconbtn-css')) {
  const s = document.createElement('style');
  s.id = 'cux-iconbtn-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: style,
    className: `cux-iconbtn cux-iconbtn--${variant} cux-iconbtn--${size}`
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.cux-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.cux-field__label { font-size: 14px; font-weight: var(--weight-medium); color: var(--text-primary); }
.cux-field__hint { font-size: 13px; color: var(--text-muted); }
.cux-field__error { font-size: 13px; color: var(--error-fg); }
.cux-input { font-family: var(--font-sans); font-size: 15px; color: var(--text-primary); background: var(--surface-card); border: var(--hairline-strong); border-radius: var(--radius-sm); padding: 10px 12px; transition: border-color 150ms ease-out; width: 100%; }
.cux-input::placeholder { color: var(--text-muted); }
.cux-input:hover:not(:disabled) { border-color: var(--gray-500); }
.cux-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
.cux-input:disabled { background: var(--surface-inset); color: var(--text-muted); cursor: not-allowed; }
.cux-input--error { border-color: var(--error-fg); }
textarea.cux-input { resize: vertical; min-height: 96px; line-height: 1.5; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-input-css')) {
  const s = document.createElement('style');
  s.id = 'cux-input-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  multiline = false,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? 'cux-' + label.toLowerCase().replace(/\W+/g, '-') : undefined);
  const cls = `cux-input${error ? ' cux-input--error' : ''}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "cux-field",
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cux-field__label",
    htmlFor: inputId
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    className: cls
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: cls
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "cux-field__error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "cux-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
const css = `
.cux-radio { display: inline-flex; align-items: flex-start; gap: 10px; cursor: pointer; font-family: var(--font-sans); font-size: 15px; color: var(--text-primary); user-select: none; }
.cux-radio input { position: absolute; opacity: 0; width: 0; height: 0; }
.cux-radio__dot { width: 18px; height: 18px; flex: none; margin-top: 2px; border: var(--hairline-strong); border-radius: 50%; background: var(--surface-card); display: flex; align-items: center; justify-content: center; transition: border-color 150ms ease-out; }
.cux-radio__dot::after { content: ''; width: 8px; height: 8px; border-radius: 50%; background: transparent; transition: background 150ms ease-out; }
.cux-radio:hover .cux-radio__dot { border-color: var(--gray-500); }
.cux-radio input:checked + .cux-radio__dot { border-color: var(--accent); }
.cux-radio input:checked + .cux-radio__dot::after { background: var(--accent); }
.cux-radio input:focus-visible + .cux-radio__dot { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.cux-radio--disabled { opacity: 0.45; cursor: not-allowed; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-radio-css')) {
  const s = document.createElement('style');
  s.id = 'cux-radio-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `cux-radio${disabled ? ' cux-radio--disabled' : ''}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "cux-radio__dot",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.cux-select-wrap { position: relative; display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.cux-select-wrap .cux-field__label { font-size: 14px; font-weight: var(--weight-medium); }
.cux-select-box { position: relative; }
.cux-select { appearance: none; -webkit-appearance: none; font-family: var(--font-sans); font-size: 15px; color: var(--text-primary); background: var(--surface-card); border: var(--hairline-strong); border-radius: var(--radius-sm); padding: 10px 36px 10px 12px; width: 100%; cursor: pointer; transition: border-color 150ms ease-out; }
.cux-select:hover:not(:disabled) { border-color: var(--gray-500); }
.cux-select:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
.cux-select:disabled { background: var(--surface-inset); color: var(--text-muted); cursor: not-allowed; }
.cux-select-caret { position: absolute; right: 12px; top: 50%; transform: translateY(-55%); pointer-events: none; color: var(--text-secondary); font-size: 12px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-select-css')) {
  const s = document.createElement('style');
  s.id = 'cux-select-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Select({
  label,
  options = [],
  id,
  style,
  ...rest
}) {
  const selectId = id || (label ? 'cux-sel-' + label.toLowerCase().replace(/\W+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "cux-select-wrap",
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cux-field__label",
    htmlFor: selectId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cux-select-box"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: "cux-select"
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "cux-select-caret"
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const css = `
.cux-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-sans); font-size: 15px; color: var(--text-primary); user-select: none; }
.cux-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.cux-switch__track { width: 36px; height: 20px; flex: none; border-radius: var(--radius-full); background: var(--gray-300); position: relative; transition: background 150ms ease-out; }
.cux-switch__track::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: var(--white); transition: transform 150ms ease-out; }
.cux-switch input:checked + .cux-switch__track { background: var(--accent); }
.cux-switch input:checked + .cux-switch__track::after { transform: translateX(16px); }
.cux-switch input:focus-visible + .cux-switch__track { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.cux-switch--disabled { opacity: 0.45; cursor: not-allowed; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-switch-css')) {
  const s = document.createElement('style');
  s.id = 'cux-switch-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `cux-switch${disabled ? ' cux-switch--disabled' : ''}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "cux-switch__track",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const css = `
.cux-tabs { font-family: var(--font-sans); border-bottom: var(--hairline); display: flex; gap: var(--space-6); }
.cux-tab { background: none; border: none; cursor: pointer; font-family: var(--font-sans); font-size: 15px; font-weight: var(--weight-medium); color: var(--text-secondary); padding: 10px 2px 12px; margin-bottom: -1px; border-bottom: 2px solid transparent; transition: color 150ms ease-out, border-color 150ms ease-out; }
.cux-tab:hover { color: var(--text-primary); }
.cux-tab--active { color: var(--text-primary); font-weight: var(--weight-semibold); border-bottom-color: var(--accent); }
.cux-tab:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('cux-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'cux-tabs-css';
  s.textContent = css;
  document.head.appendChild(s);
}
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cux-tabs",
    role: "tablist",
    style: style
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    type: "button",
    role: "tab",
    "aria-selected": t === active,
    className: `cux-tab${t === active ? ' cux-tab--active' : ''}`,
    onClick: () => onChange && onChange(t)
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Select,
  Checkbox,
  Toast,
  Eyebrow,
  Card
} = window.CulpepperUXDesignSystem_774f5e;
function CuxAbout() {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 3500);
    return () => clearTimeout(t);
  }, [sent]);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 96,
      padding: '96px 0 0'
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Eyebrow, null, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: '16px 0 24px'
    }
  }, "Plain language is a design tool."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Eleven years across fintech, health, and developer tools. I work best where the words and the interface have to be designed together \u2014 onboarding, empty states, errors, consent."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 32
    }
  }, "Before UX I edited technical books, which turns out to be the same job: find what the reader needs, cut the rest."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inset)',
      borderRadius: 'var(--radius-sm)',
      height: 220,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, "[ PORTRAIT \u2014 TO SUPPLY ]"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a project"), /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@company.com",
    hint: "Never shared."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What kind of work?",
    options: ['Product design', 'Content design', 'Both', 'Not sure yet']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "The short version",
    multiline: true,
    placeholder: "What are you working on, and what's in the way?"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "It's urgent (kickoff within a month)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, "Send note"))))), /*#__PURE__*/React.createElement(Toast, {
    open: sent,
    message: "Note sent. I reply within two working days.",
    actionLabel: "Undo",
    onAction: () => setSent(false)
  }));
}
Object.assign(window, {
  CuxAbout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
const {
  Button,
  Tag,
  Stat,
  Eyebrow
} = window.CulpepperUXDesignSystem_774f5e;
function CuxPlaceholder({
  label,
  height = 320
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inset)',
      borderRadius: 'var(--radius-sm)',
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, label));
}
function CuxCaseStudy({
  onBack
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBack
  }, "\u2190 All work")), /*#__PURE__*/React.createElement("article", {
    style: {
      padding: '32px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Case study \u2014 01"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: '16px 0 24px'
    }
  }, "Rewriting onboarding for a fintech app"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, "Nine screens became four. Four paragraphs became one sentence each. Activation drop-off fell by a third."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '24px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Content design"), /*#__PURE__*/React.createElement(Tag, null, "2026"), /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "Featured")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      borderTop: 'var(--hairline)',
      borderBottom: 'var(--hairline)',
      margin: '48px 0',
      padding: '32px 0'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "\u221238%",
    label: "support tickets"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "+31%",
    label: "activation rate"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6 wks",
    label: "research to ship"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      margin: '0 0 16px'
    }
  }, "The problem behind the problem"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Support kept tagging tickets \"user confusion,\" but the sessions told a sharper story: people weren't confused, they were suspicious. Nine screens of legal-flavored copy before linking a bank account reads like something to escape, not complete."), /*#__PURE__*/React.createElement("p", null, "We reframed the flow around one question \u2014 ", /*#__PURE__*/React.createElement("em", null, "what does the user need to believe on this screen to keep going?"), " \u2014 and cut everything that didn't answer it."), /*#__PURE__*/React.createElement(CuxPlaceholder, {
    label: "[ BEFORE / AFTER FLOW \u2014 TO SUPPLY ]"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      margin: '0 0 16px'
    }
  }, "What we shipped"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Four screens. Each one states what happens next in plain language, why it's safe, and nothing else. The legal copy moved to a linked sheet where the 2% who want it can find it."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      borderLeft: '2px solid var(--accent)',
      margin: '32px 0',
      padding: '4px 0 4px 24px',
      fontSize: 'var(--text-h3)',
      fontWeight: 600,
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      maxWidth: '30ch'
    }
  }, "\"The interface is just the delivery mechanism. The decision is the product.\""), /*#__PURE__*/React.createElement(CuxPlaceholder, {
    label: "[ FINAL SCREENS \u2014 TO SUPPLY ]",
    height: 280
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--hairline)',
      padding: '32px 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, "NEXT \u2014 02"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBack
  }, "Untangling a patient portal \u2192"))));
}
Object.assign(window, {
  CuxCaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Header.jsx
try { (() => {
const {
  Tag
} = window.CulpepperUXDesignSystem_774f5e;
function CuxHeader({
  page,
  onNav
}) {
  const links = ['Work', 'Writing', 'About'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0',
      borderBottom: 'var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Work');
    },
    style: {
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      textDecoration: 'none'
    }
  }, "Culpepper ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, "UX")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l);
    },
    style: {
      fontSize: 15,
      textDecoration: 'none',
      fontWeight: page === l ? 600 : 500,
      color: page === l ? 'var(--ink)' : 'var(--text-secondary)',
      borderBottom: page === l ? '2px solid var(--accent)' : '2px solid transparent',
      paddingBottom: 2
    }
  }, l)), /*#__PURE__*/React.createElement(Tag, null, "Available Q3")));
}
function CuxFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: 'var(--hairline)',
      marginTop: 96,
      padding: '32px 0 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 CULPEPPER UX"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, ['Email', 'LinkedIn', 'Read.cv'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, l))));
}
Object.assign(window, {
  CuxHeader,
  CuxFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Tag,
  Stat,
  Eyebrow
} = window.CulpepperUXDesignSystem_774f5e;
const CUX_CASES = [{
  id: 'onboarding',
  n: '01',
  tag: 'Content design',
  title: 'Rewriting onboarding for a fintech app',
  blurb: 'Cut activation drop-off by a third by saying less, earlier.',
  year: '2026',
  featured: true
}, {
  id: 'portal',
  n: '02',
  tag: 'Product design',
  title: 'Untangling navigation in a patient portal',
  blurb: 'Four IA rounds with real patients, one nav that finally made sense.',
  year: '2025',
  featured: true
}, {
  id: 'docs',
  n: '03',
  tag: 'Systems',
  title: 'Docs people actually read',
  blurb: 'A voice-and-tone system that survived 40 writers and 3 reorgs.',
  year: '2024',
  featured: false
}];
function CuxHome({
  onOpenCase,
  onNav
}) {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Content design', 'Product design', 'Systems'];
  const shown = CUX_CASES.filter(c => filter === 'All' || c.tag === filter);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "UX & content design \u2014 Portland, OR"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-xl)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      marginTop: 16,
      maxWidth: '16ch'
    }
  }, "Work that reads as well as it works."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      marginTop: 24,
      maxWidth: '48ch'
    }
  }, "I'm Reese Culpepper. I design interfaces and the words inside them \u2014 for products where getting it wrong costs users real money, time, or trust."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onOpenCase('onboarding')
  }, "Read the featured case"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNav('About')
  }, "Get in touch"))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: 'var(--hairline)',
      padding: '48px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, shown.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    onClick: () => onOpenCase(c.id),
    style: {
      cursor: 'pointer',
      gridColumn: c.featured && filter === 'All' ? 'span 1' : 'span 1'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: `Case study — ${c.n}`,
    title: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inset)',
      borderRadius: 'var(--radius-sm)',
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '4px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, "[ WORK SHOT \u2014 TO SUPPLY ]")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, c.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Tag, null, c.tag), /*#__PURE__*/React.createElement(Tag, null, c.year), c.featured && /*#__PURE__*/React.createElement(Tag, null, "Featured"))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: 'var(--hairline)',
      marginTop: 64,
      padding: '48px 0 0',
      display: 'flex',
      gap: 96
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "11",
    label: "years in UX and content"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\u221238%",
    label: "support tickets after the fintech relaunch"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3",
    label: "design systems shipped and maintained"
  })));
}
Object.assign(window, {
  CuxHome,
  CUX_CASES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
