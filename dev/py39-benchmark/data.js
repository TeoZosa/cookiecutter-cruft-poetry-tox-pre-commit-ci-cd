window.BENCHMARK_DATA = {
  "lastUpdate": 1628454828597,
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
          "id": "87b1ede674316fce464be006daf92fce6e0c36f6",
          "message": ":recycle: Specify project name in Typer instance instantiation\n\nUsing as single source of truth.",
          "timestamp": "2021-08-08T20:15:55Z",
          "tree_id": "706b3a851199230ad7681993b953c276d461c6a1"
        },
        "date": 1628454827197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15320.689003406407,
            "unit": "iter/sec",
            "range": "stddev: 0.000008354352750925815",
            "extra": "mean: 65.27121592101109 usec\nrounds: 7776"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4882488.102743782,
            "unit": "iter/sec",
            "range": "stddev: 5.5587999516486126e-8",
            "extra": "mean: 204.8136071111388 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12605.772438791393,
            "unit": "iter/sec",
            "range": "stddev: 0.000015568684874021045",
            "extra": "mean: 79.32873648605046 usec\nrounds: 10341"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151072.0771099282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016382505021346402",
            "extra": "mean: 6.619356926378565 usec\nrounds: 51809"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14925.620084829266,
            "unit": "iter/sec",
            "range": "stddev: 0.000011814821024333901",
            "extra": "mean: 66.99889145754302 usec\nrounds: 13755"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4762650.96851657,
            "unit": "iter/sec",
            "range": "stddev: 5.5103630434195206e-8",
            "extra": "mean: 209.9670974443727 nsec\nrounds: 188644"
          }
        ]
      }
    ]
  }
}