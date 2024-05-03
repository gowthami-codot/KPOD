const page = () => {
  return (
    <div className="mx-auto px-4 md:px-10 lg:px-20 py-8 pt-20 md:pt-40 bg-white text-black">
      <h1 className="text-4xl font-bold mb-8 text-center">
        SSH Key Generation Guide
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          How to Generate an SSH Key Pair?
        </h2>
        <p className="mb-4">Open a terminal window:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            Windows:
            <ul className="list-disc pl-8">
              <li>
                If you don&apos;t have a terminal program, download and install
                Git Bash or a similar option. Please search online for
                instructions on installation specific to your chosen program.
              </li>
              <li>
                Once installed, launch the terminal program (e.g., Git Bash).
              </li>
            </ul>
          </li>
          <li>
            macOS / Linux:
            <ul className="list-disc pl-8">
              <li>
                Open the default terminal application (e.g., Terminal app on
                macOS).
              </li>
            </ul>
          </li>
        </ul>
        <p className="mb-4">Run the ssh-keygen command:</p>
        <pre className="bg-gray-100 text-black p-2 rounded w-fit my-3">
          ssh-keygen
        </pre>
        <p className="mb-4">
          You might be prompted to specify a location to save the keys. Press
          Enter to accept the default location (usually ~/.ssh/).
        </p>
        <p className="mb-4">Enter a passphrase (optional):</p>
        <p className="mb-4">
          You&apos;ll be prompted to enter a passphrase (like a password) to
          protect your private key. This is optional, but highly recommended for
          added security. Enter a strong passphrase and type it again for
          confirmation.
        </p>
        <p className="mb-4">
          Important: Never share your private key passphrase with anyone!
        </p>
        <p className="mb-4">Key generation complete!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Identifying Your Public Key
        </h2>
        <p className="mb-4">
          Once the key pair is generated, you need to find the public key. This
          is the part you&apos;ll share with us to allow SSH access to our
          servers. Here&apos;s how to locate it:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            Open a text editor:
            <ul className="list-disc pl-8">
              <li>
                Open any text editor program (e.g., Notepad on Windows, TextEdit
                on macOS, or a similar program on Linux).
              </li>
            </ul>
          </li>
          <li>
            Locate the public key file:
            <ul className="list-disc pl-8">
              <li>The public key file typically has a name ending in .pub.</li>
              <li>
                In the default location, it would be something like
                ~/.ssh/id_rsa.pub (replace id_rsa with the actual name generated
                during key creation).
              </li>
            </ul>
          </li>
          <li>
            Copy the public key content:
            <ul className="list-disc pl-8">
              <li>Open the public key file (*.pub) in your text editor.</li>
              <li>
                The entire text within this file is your public key. Copy the
                complete text content.
              </li>
            </ul>
          </li>
        </ul>
        <p className="mb-4">
          Here&apos;s an example of what a public key might look like:
        </p>
        <pre className="bg-gray-100 p-2 rounded text-black w-fit my-3">
          ssh-rsa AAAAB3NzaC1YCjEAAABCJvb2Y8DMQUXbaCOzZzwnNEOd8gk/SfcNsjXNYMJγηC
          nk8FtRTzGNvaKbKPJUyhPWEGuzQmsFHLzPVQ== vagrant@ubuntu
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Sharing your Public Key</h2>
        <p className="mb-4">
          Once you have copied the public key content, you can paste it in the
          edit window below. This allows us to verify your identity for secure
          SSH access.
        </p>
        <p className="mb-4">
          At any point if you lose the private keys for the SSH key pair, you
          need to send us an email to cloudsupport@olakrutrim.com from your
          registered email id with the new set of public keys you want to
          associate. The old ssh public keys shall be removed.
        </p>
      </section>
    </div>
  );
};

export default page;
