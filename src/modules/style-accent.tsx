type StyleAccentProps = {
  color: string
}

const StyleAccent = ({ color }: StyleAccentProps) => (
  <style className="hidden">{`:root {--topic: ${color}}`}</style>
)

export { StyleAccent }
