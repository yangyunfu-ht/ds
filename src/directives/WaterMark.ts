import type { Directive, DirectiveBinding } from "vue";
/**
 * 添加水印指令
 */
export const Watermark: Directive = (
  el: HTMLElement,
  binding: DirectiveBinding,
) => {
  const elWidth = el.clientWidth,
    elHeight = el.clientHeight;
  el.style.position = "relative";
  const span = document.createElement("span");
  span.className = "watermark-item";
  // 设置水印的样式，参数可以从binding中获取，对于一些没有传递的值可以设置默认值
  span.style.fontSize = "12px";
  span.style.display = "inline-block";
  span.style.textAlign = "center";
  span.style.color = binding.value.color;
  span.style.height = binding.value.height + "px";
  span.style.lineHeight = binding.value.height + "px";
  span.style.width = binding.value.width + "px";
  span.style.position = "absolute";
  span.style.userSelect = "none";
  span.style.transform = "rotate(-30deg)";
  span.style.zIndex = "10";
  span.style.pointerEvents = "none"; // 让水印不遮挡页面的事件
  // 根据绑定容器的宽高设置水印
  for (let y = 0; y < elHeight; y += binding.value.height) {
    for (let x = 0; x < elWidth; x += binding.value.width) {
      const cloneSpan = span.cloneNode() as HTMLSpanElement;
      cloneSpan.style.top = `${y}px`;
      cloneSpan.style.left = `${x}px`;
      cloneSpan.innerHTML = binding.value.text;
      el.appendChild(cloneSpan);
    }
  }
};
