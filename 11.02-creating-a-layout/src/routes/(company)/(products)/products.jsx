import FileDetails from '~/file-details.jsx'

export default function ProductsIndex(props) {
  return (
    <div class="purple-layout">
      <FileDetails 
        file="routes/(company)/(products)/products.jsx"
      />
      <br />
      <div class="component-subtitle">
        I'm a layout component.
      </div>
      {props.children}
    </div>
  )
}
