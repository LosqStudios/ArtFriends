/* @ds-bundle: {"format":3,"namespace":"LosqStudiosDesignSystem_cfd79b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Gallery","sourcePath":"components/layout/Gallery.jsx"},{"name":"NavItem","sourcePath":"components/layout/NavItem.jsx"},{"name":"Panel","sourcePath":"components/layout/Panel.jsx"},{"name":"Spine","sourcePath":"components/layout/Spine.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"27a6f2716ec0","components/core/Button.jsx":"bfd04fa0c806","components/core/StatusBadge.jsx":"a5ccba9fad4c","components/core/Tag.jsx":"e54fb6a32d7c","components/forms/Checkbox.jsx":"331b977cf9ab","components/forms/Input.jsx":"9e22518b0cd6","components/forms/Switch.jsx":"c1bc034d9148","components/forms/Textarea.jsx":"cc8b01703117","components/layout/Gallery.jsx":"929a475a4e6f","components/layout/NavItem.jsx":"b267b07c6b1e","components/layout/Panel.jsx":"7ed6c77ffb27","components/layout/Spine.jsx":"af53f4e6b25c","ui_kits/console/screens.jsx":"ebd965f4c028"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LosqStudiosDesignSystem_cfd79b = window.LosqStudiosDesignSystem_cfd79b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — square initial badge or image. Hard-edged, hairline border.
 * Pass `src` for an image, otherwise `initials` render as text.
 */
function Avatar({
  initials = '',
  src = '',
  accent = false,
  className = '',
  ...rest
}) {
  const cls = ['ls-avatar', accent ? 'ls-avatar--accent' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: initials
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LosqStudios Button — uppercase mono, hard-edged.
 * Variants: primary (solid pink), outline (hairline, fills pink when `on`),
 * ghost (text only). Sizes: sm | md | lg.
 */
function Button({
  variant = 'primary',
  size = 'md',
  on = false,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['ls-btn', `ls-btn--${variant}`, `ls-btn--${size}`, on ? 'is-on' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status badge — outline marker with a dot. `live` glows pink, `idle` is muted.
 */
function StatusBadge({
  status = 'live',
  dot = true,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ls-status', `ls-status--${status}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ls-status__dot"
  }), children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag / pill — hard-edged, uppercase. Toggleable (fills pink when `on`)
 * or static. Use for filters, metadata chips, categories.
 */
function Tag({
  on = false,
  static: isStatic = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ls-tag', on ? 'is-on' : '', isStatic ? 'ls-tag--static' : '', className].filter(Boolean).join(' ');
  const Cmp = isStatic ? 'span' : 'button';
  return /*#__PURE__*/React.createElement(Cmp, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox — fills pink when checked. Controlled via `checked`/`onChange`. */
function Checkbox({
  checked = false,
  disabled = false,
  onChange,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ls-check', checked ? 'is-checked' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    role: "checkbox",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ls-check__box"
  }, checked && /*#__PURE__*/React.createElement("span", {
    className: "ls-check__tick"
  })), children && /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input — uppercase mono, hairline border, pink focus ring.
 * Optionally renders a uppercase label above the field.
 */
function Input({
  label = '',
  id,
  className = '',
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: ['ls-input', className].filter(Boolean).join(' ')
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    className: "ls-field",
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-field__label"
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hard-edged toggle switch — thumb slides, track + thumb glow pink when on. */
function Switch({
  on = false,
  disabled = false,
  onChange,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ls-switch', on ? 'is-on' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  const toggle = () => {
    if (!disabled && onChange) onChange(!on);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    role: "switch",
    "aria-checked": on,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ls-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-switch__thumb"
  })), children && /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input — mono, hairline border, pink focus ring. */
function Textarea({
  label = '',
  id,
  className = '',
  rows = 4,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    className: ['ls-textarea', className].filter(Boolean).join(' ')
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    className: "ls-field",
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-field__label"
  }, label), field);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Gallery.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gallery — responsive grid of images in hairline frames with
 * uppercase mono captions and telemetry index marks. Built for
 * website galleries: pass `min` for an auto-filling responsive grid
 * or `columns` for a fixed count. Zero radius, no shadows.
 */
function Gallery({
  items = [],
  columns = 3,
  min = '',
  gap = 'var(--space-3)',
  ratio = '4 / 3',
  ticks = false,
  captions = true,
  className = '',
  ...rest
}) {
  const cols = min ? `repeat(auto-fill, minmax(${min}, 1fr))` : `repeat(${columns}, minmax(0, 1fr))`;
  const cls = ['ls-gallery', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      gridTemplateColumns: cols,
      gap
    }
  }, rest), items.map((it, i) => {
    const cellCls = ['ls-gallery__cell', ticks ? 'ls-ticks' : ''].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement("figure", {
      key: i,
      className: cellCls
    }, /*#__PURE__*/React.createElement("div", {
      className: "ls-gallery__media",
      style: {
        aspectRatio: ratio
      }
    }, it.src ? /*#__PURE__*/React.createElement("img", {
      src: it.src,
      alt: it.alt || it.caption || '',
      loading: "lazy"
    }) : /*#__PURE__*/React.createElement("span", {
      className: "ls-gallery__ph"
    }, it.caption || 'image')), captions && /*#__PURE__*/React.createElement("figcaption", {
      className: "ls-gallery__cap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ls-gallery__cap-t"
    }, it.caption || '\u2014'), /*#__PURE__*/React.createElement("span", {
      className: "ls-gallery__cap-i"
    }, String(i + 1).padStart(2, '0'))));
  }));
}
Object.assign(__ds_scope, { Gallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Gallery.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sidebar nav row — uppercase; active state shows a pink left bar. */
function NavItem({
  active = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ls-nav-item', active ? 'is-active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/layout/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Panel — bordered container. Optional uppercase title/meta header,
 * `ticks` for the pink corner-registration frame, `raised` for the
 * lighter fill.
 */
function Panel({
  title = '',
  meta = '',
  ticks = false,
  raised = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ls-panel', raised ? 'ls-panel--raised' : '', ticks ? 'ls-ticks' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), (title || meta) && /*#__PURE__*/React.createElement("div", {
    className: "ls-panel__head"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "ls-title",
    style: {
      fontSize: 'var(--fs-meta)',
      letterSpacing: 'var(--track-mid)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    className: "ls-label"
  }, meta)), children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Panel.jsx", error: String((e && e.message) || e) }); }

// components/layout/Spine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Telemetry spine — the brand's signature fixed left rail. Absolute by
 * default (parent must be positioned); pass `fixed` to pin to viewport.
 * Renders a pink mark, vertical label, and version stamp.
 */
function Spine({
  label = 'LOSQ · TELEMETRY',
  version = 'V01',
  mark = '◈',
  fixed = false,
  className = '',
  style,
  ...rest
}) {
  const cls = ['ls-spine', className].filter(Boolean).join(' ');
  const pos = fixed ? {
    position: 'fixed'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      ...pos,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ls-spine__mark"
  }, mark), /*#__PURE__*/React.createElement("div", {
    className: "ls-spine__text"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ls-spine__ver"
  }, version));
}
Object.assign(__ds_scope, { Spine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Spine.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/screens.jsx
try { (() => {
/* LosqStudios Console — reference UI kit screens.
   Composes the design-system primitives (window.LosqStudiosDesignSystem_cfd79b)
   into a telemetry/mission-control product. Exports screens to window so the
   index.html shell can mount them. */

const DS = window.LosqStudiosDesignSystem_cfd79b;
const {
  Button,
  Tag,
  StatusBadge,
  Avatar,
  Input,
  Textarea,
  Checkbox,
  Switch,
  Panel,
  NavItem,
  Spine
} = DS;

/* ---------- shared bits ---------- */
function Label({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ls-label",
    style: style
  }, children);
}
function Stat({
  k,
  v,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '14px 16px',
      border: '1px solid var(--border)',
      background: 'var(--panel)'
    }
  }, /*#__PURE__*/React.createElement(Label, null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      color: accent ? 'var(--accent)' : 'var(--text-bright)',
      letterSpacing: '1px'
    }
  }, v));
}

/* ---------- LOGIN ---------- */
function LoginScreen({
  onAuth
}) {
  const [call, setCall] = React.useState('NOVA-7');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Spine, {
    label: "LOSQ \xB7 CONSOLE",
    version: "V01",
    fixed: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ls-ticks",
    style: {
      padding: '40px 36px',
      background: 'var(--panel)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.svg",
    style: {
      width: 56,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ls-title",
    style: {
      fontSize: 24
    }
  }, "Establish Uplink"), /*#__PURE__*/React.createElement("div", {
    className: "ls-subtitle",
    style: {
      marginBottom: 26
    }
  }, "Authenticate to console"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Callsign",
    value: call,
    onChange: e => setCall(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Access key",
    type: "password",
    defaultValue: "000000"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    onChange: () => {}
  }, "Remember this terminal"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onAuth,
    style: {
      width: '100%',
      marginTop: 6
    }
  }, "Establish uplink \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Label, null, "SECURE CHANNEL"), /*#__PURE__*/React.createElement(Label, {
    style: {
      color: 'var(--accent)'
    }
  }, "\u25CF READY"))));
}

/* ---------- APP SHELL ---------- */
const NAV = [{
  id: 'dash',
  label: 'Dashboard'
}, {
  id: 'fleet',
  label: 'Fleet'
}, {
  id: 'comms',
  label: 'Comms'
}, {
  id: 'logs',
  label: 'Logs'
}];
function Shell({
  tab,
  setTab,
  onLogout,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      paddingLeft: 40
    }
  }, /*#__PURE__*/React.createElement(Spine, {
    label: "LOSQ \xB7 CONSOLE",
    version: "V01",
    fixed: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: '1px solid var(--border)',
      padding: '22px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.svg",
    style: {
      width: 30
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '2px',
      color: 'var(--text-bright)',
      textTransform: 'uppercase'
    }
  }, "Console"), /*#__PURE__*/React.createElement(Label, null, "Mission ops"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    active: tab === n.id,
    onClick: () => setTab(n.id)
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "ls-rule-soft"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "N7"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-bright)',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    }
  }, "Nova-7"), /*#__PURE__*/React.createElement(Label, null, "Operator"))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onLogout,
    style: {
      alignSelf: 'flex-start'
    }
  }, "\u21AA Sign out"))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '24px 28px 60px'
    }
  }, children)));
}

/* ---------- DASHBOARD ---------- */
function Dashboard({
  live,
  setLive
}) {
  const [filter, setFilter] = React.useState('all');
  const fleet = [{
    id: 'NOVA-7',
    s: 'live',
    d: 'ORBIT · 412KM',
    drift: '0.003%'
  }, {
    id: 'KESTREL-3',
    s: 'live',
    d: 'ORBIT · 388KM',
    drift: '0.011%'
  }, {
    id: 'AUGUR-1',
    s: 'idle',
    d: 'DOCKED · BAY 04',
    drift: '—'
  }, {
    id: 'HALDANE-9',
    s: 'live',
    d: 'TRANSIT · L2',
    drift: '0.007%'
  }];
  const shown = filter === 'all' ? fleet : fleet.filter(f => f.s === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ls-title"
  }, "Dashboard"), /*#__PURE__*/React.createElement("div", {
    className: "ls-subtitle"
  }, "04 vessels \xB7 uplink stable")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: live ? 'live' : 'idle'
  }, live ? 'Telemetry live' : 'Paused'), /*#__PURE__*/React.createElement(Switch, {
    on: live,
    onChange: setLive
  }, "Live"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    k: "Vessels",
    v: "04"
  }), /*#__PURE__*/React.createElement(Stat, {
    k: "Uplinks",
    v: "03",
    accent: true
  }), /*#__PURE__*/React.createElement(Stat, {
    k: "Avg drift",
    v: "0.007%"
  }), /*#__PURE__*/React.createElement(Stat, {
    k: "Queue",
    v: "12"
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Fleet",
    meta: "REGISTRY",
    ticks: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '4px 0 16px'
    }
  }, ['all', 'live', 'idle'].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    on: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", null, shown.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    className: "ls-row",
    style: {
      borderBottom: i === shown.length - 1 ? '0' : '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: f.s === 'live' ? 'var(--accent)' : 'var(--faint)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 130,
      color: 'var(--text-bright)'
    }
  }, f.id), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--label)',
      fontSize: 11
    }
  }, f.d), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text)',
      fontSize: 11
    }
  }, "DRIFT ", f.drift))))));
}

/* ---------- COMMS (composer) ---------- */
function Comms() {
  const [msg, setMsg] = React.useState('');
  const [chan, setChan] = React.useState('NOVA-7');
  const [enc, setEnc] = React.useState(true);
  const [sent, setSent] = React.useState(null);
  const channels = ['NOVA-7', 'KESTREL-3', 'HALDANE-9', 'BROADCAST'];
  const send = () => {
    if (msg.trim()) {
      setSent(msg.trim());
      setMsg('');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "ls-title"
  }, "Comms"), /*#__PURE__*/React.createElement("div", {
    className: "ls-subtitle"
  }, "Compose transmission")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 220px',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    ticks: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Channel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8,
      flexWrap: 'wrap'
    }
  }, channels.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    on: chan === c,
    onClick: () => setChan(c)
  }, c)))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Transmission",
    rows: 6,
    placeholder: "Type message\u2026",
    value: msg,
    onChange: e => setMsg(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    on: enc,
    onChange: setEnc
  }, "Encrypt"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setMsg('')
  }, "Clear"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: send
  }, "Transmit \u2192"))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Status",
    meta: "LINK",
    raised: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "live"
  }, chan), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Encryption"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-bright)',
      fontSize: 12,
      marginTop: 4,
      textTransform: 'uppercase'
    }
  }, enc ? 'AES · ON' : 'OFF')), /*#__PURE__*/React.createElement("hr", {
    className: "ls-rule-soft"
  }), sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    style: {
      color: 'var(--accent)'
    }
  }, "\u25CF SENT"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text)',
      fontSize: 11,
      marginTop: 6
    }
  }, sent)) : /*#__PURE__*/React.createElement(Label, {
    style: {
      color: 'var(--faint)'
    }
  }, "NO TRANSMISSION")))));
}
function Placeholder({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "ls-title"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "ls-subtitle"
  }, "Reference screen")), /*#__PURE__*/React.createElement("div", {
    className: "ls-ticks",
    style: {
      padding: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      color: 'var(--faint)'
    }
  }, name, " \xB7 NOT IN THIS KIT")));
}
Object.assign(window, {
  LoginScreen,
  Shell,
  Dashboard,
  Comms,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Gallery = __ds_scope.Gallery;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Spine = __ds_scope.Spine;

})();
