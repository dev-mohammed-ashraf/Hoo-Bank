import Image from "next/image";

function PartenerShip() {
  return (
    <div
      id="parteners"
      className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-between my-24"
    >
      <Image
        src="/assets/airbnb.png"
        alt="Airbnb"
        width={160}
        height={160}
        className="mx-auto"
      />
      <Image
        src="/assets/binance.png"
        alt="Binance"
        width={200}
        height={200}
        className="mx-auto"
      />
      <Image
        src="/assets/coinbase.png"
        alt="Coinbase"
        width={145}
        height={145}
        className="mx-auto -translate-y-1"
      />
      <Image
        src="/assets/dropbox.png"
        alt="Dropbox"
        width={180}
        height={180}
        className="mx-auto"
      />
    </div>
  );
}

export default PartenerShip;
