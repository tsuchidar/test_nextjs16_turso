export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background p-6">
      <p className="text-xs text-muted-foreground text-right">
        ※デザイン部分の実装については8割くらいAIの出力です
      </p>
    </footer>
  );
}
