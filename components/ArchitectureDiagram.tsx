export default function ArchitectureDiagram() {
  return (
    <div className="my-10 flex justify-center">
      <div className="flex items-center gap-4 text-sm">
        <div className="box">Client</div>
        <span>→</span>
        <div className="box border-orange-500 text-orange-600">Keploy</div>
        <span>→</span>
        <div className="box">App</div>
        <span>→</span>
        <div className="box">Database</div>
      </div>
    </div>
  );
}
