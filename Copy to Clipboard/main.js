document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copyButton");
  const codeSnippet = document.getElementById("codeSnippet");

  copyButton.addEventListener("click", function () {
    // Select the text
    codeSnippet.select();
    // Copy the text
    navigator.clipboard.writeText(codeSnippet.value)
      .then(() => alert("Code copied!"))
      .catch(() => alert("Failed to copy."));
  });
});
