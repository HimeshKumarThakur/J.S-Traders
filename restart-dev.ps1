$ErrorActionPreference = 'SilentlyContinue'
$ports = @(3000, 3001, 3002, 3003)

$pids = Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in $ports } | Select-Object -ExpandProperty OwningProcess -Unique
foreach ($procId in $pids) {
  try {
    Stop-Process -Id $procId -Force -ErrorAction Stop
  } catch {}
}

$ErrorActionPreference = 'Continue'
Start-Process cmd.exe -ArgumentList '/c', 'npm --prefix .\chair-company-website run dev' -WindowStyle Minimized
Start-Sleep -Seconds 14

Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -in $ports } |
  Select-Object LocalAddress, LocalPort, OwningProcess |
  Sort-Object LocalPort |
  Format-Table -AutoSize
