window.BENCHMARK_DATA = {
  "lastUpdate": 1628313354048,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
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
          "id": "1d32e0ff6140201a534c5d5a9fa91966d0d740cc",
          "message": "Merge pull request #273 from TeoZosa/migrate-packaging-from-pure-python-to-mypyc-compiled-platform-specific-packages\n\n📦⚡️Compile Package Modules as C-Extensions via Mypyc",
          "timestamp": "2021-08-07T05:11:02Z",
          "tree_id": "9b6429dc1b29ed293ada87e86131f33e500ff437"
        },
        "date": 1628313352439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15019.059148474958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000098171251067018",
            "extra": "mean: 66.58206683349673 usec\nrounds: 7975"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5035725.145032617,
            "unit": "iter/sec",
            "range": "stddev: 1.0641016268124267e-8",
            "extra": "mean: 198.58113205130294 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12961.361512630589,
            "unit": "iter/sec",
            "range": "stddev: 0.000018421003350182472",
            "extra": "mean: 77.15238858398632 usec\nrounds: 9671"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148614.59543295708,
            "unit": "iter/sec",
            "range": "stddev: 4.5866921717232513e-7",
            "extra": "mean: 6.728814199484998 usec\nrounds: 47847"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14425.648358883389,
            "unit": "iter/sec",
            "range": "stddev: 0.000011907407758035337",
            "extra": "mean: 69.32097435913131 usec\nrounds: 14430"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4920253.179903217,
            "unit": "iter/sec",
            "range": "stddev: 1.765903318853196e-8",
            "extra": "mean: 203.24157384481578 nsec\nrounds: 199961"
          }
        ]
      }
    ]
  }
}