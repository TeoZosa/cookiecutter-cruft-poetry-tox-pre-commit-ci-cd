window.BENCHMARK_DATA = {
  "lastUpdate": 1623111248251,
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
          "id": "d61ef62a30acbe3ba603d909f8450cc93687ff24",
          "message": ":green_heart: Temporarily prohibit Codecov upload failures from failing CI\n\nTo address recently flaky Codecov upload jobs failing CI.\n- see: codecov/codecov-action/issues/330",
          "timestamp": "2021-06-08T00:09:13Z",
          "tree_id": "f08e7e2c63da166098a390ffbb84dc57b596a568"
        },
        "date": 1623111246738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15101.913524552896,
            "unit": "iter/sec",
            "range": "stddev: 0.00001987868467565472",
            "extra": "mean: 66.21677434281334 usec\nrounds: 12971"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4510475.476545896,
            "unit": "iter/sec",
            "range": "stddev: 1.5274726645952598e-7",
            "extra": "mean: 221.70611617278098 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12640.936154000745,
            "unit": "iter/sec",
            "range": "stddev: 0.000013925048604190195",
            "extra": "mean: 79.10806508452373 usec\nrounds: 9311"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 138759.37503518915,
            "unit": "iter/sec",
            "range": "stddev: 0.000003009996000455894",
            "extra": "mean: 7.206720264821036 usec\nrounds: 47620"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14914.546959179179,
            "unit": "iter/sec",
            "range": "stddev: 0.000022137131992719382",
            "extra": "mean: 67.0486339770816 usec\nrounds: 12532"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4556300.325443817,
            "unit": "iter/sec",
            "range": "stddev: 1.7801262818812718e-7",
            "extra": "mean: 219.47631380181357 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}