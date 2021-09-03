window.BENCHMARK_DATA = {
  "lastUpdate": 1630693036765,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "406b564ff9d35209319cc3416c8b7bf4b94e24ac",
          "message": ":bug: Defer to `base_configs` for `nbqaxdoctest`\n\nviz.:\n- `wheel`,\n- `wheel_pip517`\n- `parallel_show_output`",
          "timestamp": "2021-09-03T18:11:24Z",
          "tree_id": "e5d64e88c07da2315e7248ef732aa7b40cfb72ce"
        },
        "date": 1630693034280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14595.130482431776,
            "unit": "iter/sec",
            "range": "stddev: 0.00009249400415193124",
            "extra": "mean: 68.51600273143872 usec\nrounds: 5858"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4193718.9955848954,
            "unit": "iter/sec",
            "range": "stddev: 5.35559907679537e-7",
            "extra": "mean: 238.45183739158503 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13200.929043066895,
            "unit": "iter/sec",
            "range": "stddev: 0.00006093580754989487",
            "extra": "mean: 75.75224415930016 usec\nrounds: 8818"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131205.3185146523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011274687349623892",
            "extra": "mean: 7.62164225749984 usec\nrounds: 37172"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14797.174878857651,
            "unit": "iter/sec",
            "range": "stddev: 0.00006664168018395177",
            "extra": "mean: 67.5804677708317 usec\nrounds: 10627"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4270434.950582481,
            "unit": "iter/sec",
            "range": "stddev: 3.1355628021894305e-7",
            "extra": "mean: 234.168184639644 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}