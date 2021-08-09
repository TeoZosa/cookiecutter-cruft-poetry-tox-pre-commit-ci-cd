window.BENCHMARK_DATA = {
  "lastUpdate": 1628533470024,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "6fcea7e1f38d49f329f51be06454eaf52fee6b9f",
          "message": ":pushpin: Pin `actions/checkout` version in `auto-merge` job\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-09T18:15:03Z",
          "tree_id": "a6fc881605f880338e7edc0130fc0fb537099906"
        },
        "date": 1628533268020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14308.94621294293,
            "unit": "iter/sec",
            "range": "stddev: 0.00007877179262062473",
            "extra": "mean: 69.88634838080989 usec\nrounds: 7133"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4007182.25176215,
            "unit": "iter/sec",
            "range": "stddev: 7.68189597322242e-7",
            "extra": "mean: 249.5519138318083 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11350.910737153963,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397208027301614",
            "extra": "mean: 88.09865773384912 usec\nrounds: 8993"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 111157.45107692252,
            "unit": "iter/sec",
            "range": "stddev: 0.00003260285444516688",
            "extra": "mean: 8.996248027565745 usec\nrounds: 38911"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13867.643866920496,
            "unit": "iter/sec",
            "range": "stddev: 0.00008778847623598535",
            "extra": "mean: 72.11030291781383 usec\nrounds: 12954"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3875176.967576535,
            "unit": "iter/sec",
            "range": "stddev: 2.7910362663003166e-7",
            "extra": "mean: 258.0527311054366 nsec\nrounds: 3927"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "34f48ec1f42da9169af0c68ca34854639e4e8652",
          "message": "Merge pull request #278 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-74f44a8\n\n⬆️ Bump python from `5f8d373` to `74f44a8` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-08-09T18:19:11Z",
          "tree_id": "1b2a2e5566a80ed2fc0e3370beebcb13efdfa6ef"
        },
        "date": 1628533468570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16476.65678508496,
            "unit": "iter/sec",
            "range": "stddev: 0.000037372987196533023",
            "extra": "mean: 60.69192391658134 usec\nrounds: 6322"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5231884.742940909,
            "unit": "iter/sec",
            "range": "stddev: 5.392013554323699e-9",
            "extra": "mean: 191.13570904808336 nsec\nrounds: 48544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14619.683230411461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023918530706287777",
            "extra": "mean: 68.40093483830263 usec\nrounds: 9346"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151224.7082380518,
            "unit": "iter/sec",
            "range": "stddev: 0.000005308151963859786",
            "extra": "mean: 6.612676008115292 usec\nrounds: 40001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16606.804161160268,
            "unit": "iter/sec",
            "range": "stddev: 0.000008013941192853361",
            "extra": "mean: 60.21628185023006 usec\nrounds: 6766"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4979581.882372014,
            "unit": "iter/sec",
            "range": "stddev: 2.6883431287829907e-8",
            "extra": "mean: 200.82007357680928 nsec\nrounds: 181786"
          }
        ]
      }
    ]
  }
}