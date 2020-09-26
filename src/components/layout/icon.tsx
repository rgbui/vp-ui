
/***
 * 默认是引用font-awesome   icon='{code}:font' 其中font表示图标的来源
 * 也可以自已自定义  importIconSource 注册一个处理函数buildIcon,返回html
 *   
 */
// import { Component, MouseEvent } from "react";

import * as  React from "react";

interface VpIconProps {
  icon: string,
  size?: number,
  angle?: number,
  flip?: 'x' | 'y',
  disabled?: boolean,
  title?: string,
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void,
}
class VpIcon extends React.Component<VpIconProps>{
  private static outIconSources: { type: string, buildIcon: (code: string) => string }[] = [];
  static importIconSource(type: string, buildIcon: (code: string) => string) {
    if (this.outIconSources.filter(x => x.type == type).length > 0) {
      var at = this.outIconSources.findIndex(x => x.type == type);
      this.outIconSources[at] = { type, buildIcon };
    }
    else
      this.outIconSources.push({ type, buildIcon });
  }
  onClick(e: React.MouseEvent<HTMLDivElement>) {
    if (typeof this.props.onClick == 'function')
      this.props.onClick(e);
  }
  onMousedown(e: React.MouseEvent<HTMLDivElement>) {
    if (typeof this.props.onMouseDown == 'function')
      this.props.onMouseDown(e);
  }
  render() {
    if (!this.props.icon) return;
    var style: Record<string, any> = {};
    if (typeof this.props.size != 'number') {
      style.width = this.props.size + "px";
      style.height = this.props.size + "px";
    }
    if (this.props.angle) {
      style['transform'] = `rotate(${this.props.angle}deg)`;
    }
    if (this.props.flip == 'x') {
      if (style['transform']) style['transform'] += `scaleX(-1)`;
      else style['transform'] = `scaleX(-1)`;
    }
    else if (this.props.flip == 'y') {
      if (style['transform']) style['transform'] += `scaleY(-1)`;
      else style['transform'] = `scaleY(-1)`;
    }
    var ics = this.props.icon.split(':');
    var name = ics[0];
    var type = 'font';
    if (ics[1]) type = ics[1];
    var icon;
    if (type == 'font') icon = { __html: `<span class='fa fa-${name}'></span>` }
    else if (type) {
      var ois = VpIcon.outIconSources.find(x => x.type == type);
      if (ois) {
        icon = { __html: ois.buildIcon(name) };
      }
      else return;
    }
    return <i style={style} onClick={this.onClick.bind(this)} dangerouslySetInnerHTML={icon} className={`vp-icon ${this.props.disabled ? "vp-icon-disabled" : ""}`} ></i>
  }
}

export default VpIcon