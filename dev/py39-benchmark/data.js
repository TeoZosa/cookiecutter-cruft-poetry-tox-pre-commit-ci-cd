window.BENCHMARK_DATA = {
  "lastUpdate": 1628293472644,
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
          "id": "0d3b740d80b735b000aa2876a7bff65ba284d149",
          "message": ":hammer: Decouple package `build` `make` target from Poetry\n\nSince the `package` testenv is self-contained, installing all required\nbuild dependencies (including Poetry) itself, `tox` is the only required\n dependency from the user's point-of-view. Therefore, calling `tox`\ndirectly should in theory be more robust; it will work so long as some\n`tox` executable is available, whether or not it was installed by Poetry\n and whether or not a Poetry executable is available.",
          "timestamp": "2021-08-06T23:37:17Z",
          "tree_id": "d058a8fd008991689db5d9b9c6e0f1d293648fce"
        },
        "date": 1628293470906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14730.925273305958,
            "unit": "iter/sec",
            "range": "stddev: 0.000008371147529903878",
            "extra": "mean: 67.88439839635254 usec\nrounds: 1747"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4161865.085491384,
            "unit": "iter/sec",
            "range": "stddev: 4.022544867989239e-8",
            "extra": "mean: 240.27689015822367 nsec\nrounds: 5142"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12944.451347527121,
            "unit": "iter/sec",
            "range": "stddev: 0.000018739989511404653",
            "extra": "mean: 77.25317768613174 usec\nrounds: 9680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 140055.77873565906,
            "unit": "iter/sec",
            "range": "stddev: 0.000001576189141541007",
            "extra": "mean: 7.1400124223892085 usec\nrounds: 48542"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14787.08281405602,
            "unit": "iter/sec",
            "range": "stddev: 0.000008925346534068136",
            "extra": "mean: 67.62659089522641 usec\nrounds: 9709"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4223493.1633877065,
            "unit": "iter/sec",
            "range": "stddev: 5.176084010125109e-8",
            "extra": "mean: 236.77083431045077 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}