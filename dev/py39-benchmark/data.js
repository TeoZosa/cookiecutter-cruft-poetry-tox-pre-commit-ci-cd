window.BENCHMARK_DATA = {
  "lastUpdate": 1629666911452,
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
          "id": "4c51dd1aa3e984e3bc9c40a461bb0a5dfb50a760",
          "message": ":art: Enforce boilerplate-first dependency declaration ordering\n\nThis makes it easier to follow along. Additionally, since new\nproject-specific dependencies added via the `poetry add` command are\nadded to the end of the `tool.poetry.dependencies` section, they will\nnow automatically be grouped with other project-specific dependencies.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-22T21:09:57Z",
          "tree_id": "907ba421e5e526fd367cbfbb5adc5ed8026220e6"
        },
        "date": 1629666910297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15818.98269652725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000372251161661689",
            "extra": "mean: 63.21519020433157 usec\nrounds: 878"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5015815.4822654845,
            "unit": "iter/sec",
            "range": "stddev: 1.0836760422491583e-8",
            "extra": "mean: 199.36937543549317 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14520.203272783305,
            "unit": "iter/sec",
            "range": "stddev: 0.000002231915950717422",
            "extra": "mean: 68.86955927637749 usec\nrounds: 5525"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151545.74355875838,
            "unit": "iter/sec",
            "range": "stddev: 3.8171194125401813e-7",
            "extra": "mean: 6.598667679585954 usec\nrounds: 46729"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16469.157259373344,
            "unit": "iter/sec",
            "range": "stddev: 0.000016312295867156223",
            "extra": "mean: 60.719561071095775 usec\nrounds: 9931"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4969098.129316996,
            "unit": "iter/sec",
            "range": "stddev: 1.335441913666647e-8",
            "extra": "mean: 201.2437617403991 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}