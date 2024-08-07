import FileDetails from '~/file-details.jsx'

export default function ProductsIndex(props) {
  return (
    <div class="purple-layout">
      <div class="filename">
        <div>file:</div><code>routes/(company)/(products)/products.jsx</code>
      </div>
      <br />
      <div class="component-subtitle">
        I'm a layout component.
      </div>
      {props.children}
    </div>
  )
}
